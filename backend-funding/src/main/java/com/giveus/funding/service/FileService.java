package com.giveus.funding.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    String upload(MultipartFile file, String objectName, String folderName);

    void delete(String objectName, String folderName);

    String generateObjectName();
}
