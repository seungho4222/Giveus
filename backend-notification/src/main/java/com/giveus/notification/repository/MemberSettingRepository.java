package com.giveus.notification.repository;

import com.giveus.notification.dto.response.MemberSettingInfoRes;
import com.giveus.notification.entity.Member;
import com.giveus.notification.entity.MemberSetting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MemberSettingRepository extends JpaRepository<MemberSetting, Integer> {

    Optional<MemberSetting> findMemberSettingByMember(Member member);

}
