import { useRef, useCallback, useState } from 'react';
import Button from '../button/Button';
import { requestWithFile, requestWithBase64 } from '@/pages/fundingregister/OCR';

const ImageUpload = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          const base64Data = reader.result.toString();
          setImageUrl(base64Data);
          setIsImageLoaded(true); // 이미지 로드 완료 시 상태 변경
        }
      };
      reader.readAsDataURL(file);
    },
    [],
  );

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  const handleOCRButtonClick = useCallback(() => {
    if (imageUrl) { // 이미지 URL이 존재하는 경우에만 requestWithBase64 호출
      console.log(imageUrl);
      requestWithBase64(imageUrl);
    }
  }, [imageUrl]);

  return (
    <>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Uploaded"
          style={{
            maxWidth: '300px',
            maxHeight: '300px',
            border: '1px #cacfd9 solid',
            borderRadius: '10px',
          }}
          onLoad={() => setIsImageLoaded(true)} // 이미지 로드 완료 시 상태 변경
        />
      ) : (
        <div
          style={{
            width: '300px',
            height: '300px',
            border: '1px #cacfd9 solid',
            borderRadius: '10px',
          }}
        ></div>
      )}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onUploadImage}
      />
      <Button
        onButtonClick={onUploadImageButtonClick}
        $backgroundColor={'#4382ff'}
        width={'300px'}
        height={'50px'}
        $borderRadius={'10px'}
        $children={'파일 선택'}
      />
      <Button
        onButtonClick={handleOCRButtonClick}
        $backgroundColor={'#4382ff'}
        width={'300px'}
        height={'50px'}
        $borderRadius={'10px'}
        $children={'OCR 검사'}
        disabled={!isImageLoaded} // 이미지 로드 전까지 버튼 비활성화
      />
    </>
  );
};

export default ImageUpload;
