package com.giveus.funding.global.util;

import com.giveus.funding.infra.file.FileClient;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 * 파일 업로드를 담당하는 파일 서비스입니다.
 *
 * @author 이하늬
 */
@Service
@RequiredArgsConstructor
public class FileUtil {
    private final FileClient fileClient;

    public String upload(MultipartFile file, String objectName, String folderName) {
        return fileClient.uploadFile(file, objectName, folderName);
    }

    public void delete(String objectName, String folderName) {
        fileClient.deleteFile(objectName, folderName);
    }


    /**
     * 고유 오브젝트명을 생성하는 메서드입니다.
     *
     * @return 생성한 오브젝트명
     */
    public String generateObjectName() {
        String random = UUID.randomUUID().toString();
        random = random.replace("-", "");
        random = random.substring(0, 10);
        return random;
    }
}
