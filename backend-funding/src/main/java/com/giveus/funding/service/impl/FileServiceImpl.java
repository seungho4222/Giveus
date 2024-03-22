package com.giveus.funding.service.impl;

import com.giveus.funding.service.FileService;
import com.giveus.funding.util.AwsS3Util;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FileService {
    private final AwsS3Util awsS3Util;

    @Override
    public String upload(MultipartFile file) {
        return awsS3Util.uploadFile(file);
    }
}
