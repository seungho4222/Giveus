package com.giveus.payment.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.jsontype.BasicPolymorphicTypeValidator;
import com.fasterxml.jackson.databind.jsontype.PolymorphicTypeValidator;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableCaching
@RequiredArgsConstructor
public class CachingConfig {
    private final RedisConnectionFactory redisConnectionFactory;

    @Bean
    public CacheManager cacheManager() {

        RedisCacheConfiguration defaultConfig =
                RedisCacheConfiguration.defaultCacheConfig()
                        .entryTtl(Duration.ofDays(7)) // 캐시 데이터 유효 기간 -> 일주일
                        .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(
                                new StringRedisSerializer())) // 캐시 데이터의 키를 직렬화 시 문자열로 변환하여 저장
                        .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(
                                new GenericJackson2JsonRedisSerializer(objectMapper()))); // 캐시 데이터 값 직렬화 시 JSON 메시지로 저장

        Map<String, RedisCacheConfiguration> configurations = new HashMap<>();
        configurations.put("fundingList", defaultConfig.entryTtl(Duration.ofDays(7)));

        return RedisCacheManager.RedisCacheManagerBuilder
                .fromConnectionFactory(redisConnectionFactory) // 사용할 레디스커넥션팩토리 객체 설정
                .cacheDefaults(defaultConfig) // 기본 캐시 설정
                .withInitialCacheConfigurations(configurations) // 생성 시 초깃값 설정
                .build();
    }

    public ObjectMapper objectMapper() {
        PolymorphicTypeValidator typeValidator = BasicPolymorphicTypeValidator
                .builder()
                .allowIfSubType(Object.class)
                .build();
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModules(new JavaTimeModule(), new Jdk8Module());
        mapper.activateDefaultTyping(typeValidator, ObjectMapper.DefaultTyping.EVERYTHING);
        return mapper;
    }

}