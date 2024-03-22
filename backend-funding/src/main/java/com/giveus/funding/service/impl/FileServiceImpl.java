package com.giveus.funding.service.impl;

import com.giveus.funding.service.FileService;
import com.giveus.funding.util.AwsS3Util;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

/**
 * 파일 업로드를 담당하는 파일 서비스입니다.
 *
 * @author 이하늬
 */
@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FileService {
    private final AwsS3Util awsS3Util;

    @Override
    public String upload(MultipartFile file, String objectName, String folderName) {
        return awsS3Util.uploadFile(file, objectName, folderName);
    }

    @Override
    public void delete(String objectName, String folderName) {
        awsS3Util.deleteFile(objectName, folderName);
    }


    /**
     * 고유 오브젝트명을 생성하는 메서드입니다.
     *
     * @return 생성한 오브젝트명
     */
    @Override
    public String generateObjectName() {
        String random = UUID.randomUUID().toString();
        random = random.replace("-", "");
        random = random.substring(0, 10);
        return random;
    }
}
