import { useRef, useCallback, useState } from 'react'
import Button from '../button/Button'
import { requestWithFile, requestWithBase64 } from '@/apis/ocr/ocr'

const ImageUpload = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [imageData, setImageData] = useState<string | null>(null)
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return
      }
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.result) {
          const base64Data = reader.result.toString()
          setImageData(base64Data)
          setIsImageLoaded(true) // 이미지 로드 완료 시 상태 변경
        }
      }
      reader.readAsDataURL(file)
    },
    [],
  )

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return
    }
    inputRef.current.click()
  }, [])

  const handleOCRButtonClick = useCallback(() => {
    if (imageData) {
      const base64Data = imageData.split(',')[1]
      // console.log(base64Data);
      const ocr_result = requestWithBase64(base64Data)
      console.log(ocr_result)
    }
  }, [imageData])

  return (
    <>
      {imageData ? (
        <img
          src={imageData}
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
  )
}

export default ImageUpload
