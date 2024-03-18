import { useRef, useCallback, useState } from 'react'
import Button from '../button/Button'


const ImageUpload = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return
      }
      const file = e.target.files[0]
      const fileUrl = URL.createObjectURL(file) // 파일의 URL 생성
      setImageUrl(fileUrl) // 이미지 URL 설정
    },
    [],
  )

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return
    }
    inputRef.current.click()
  }, [])

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
      )}{' '}
      {/* 이미지 표시 */}
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
    </>
  )
}

export default ImageUpload
