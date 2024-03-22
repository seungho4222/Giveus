import { FileStateType } from '@/types/commonType'
import * as s from '@components/secondReg/SecondRegImg/SecondRefImg.styled'
import { useRef, useState } from 'react'

const Index = (props: FileStateType) => {
  const { setValue } = props
  const fileInput = useRef<HTMLInputElement | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setValue(selectedFile)
      // FileReader 객체 생성 : 파일을 읽을 때 사용
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
      // readAsDataURL 메서드 : 파일을 Data URL로 읽기
      // -> 파일을 텍스트로 변환한 뒤 Base64 인코딩한 문자열로 반환
      // 파일을 읽으면 onloadend 이벤트 핸들러가 호출되어 파일 읽기가 완료됨을 알림
    }
  }

  return (
    <s.Container>
      <s.FileInput
        type="file"
        accept="image/*"
        ref={fileInput}
        onChange={handleFileChange}
      />
      {previewImage ? (
        <s.PreviewImage
          src={previewImage}
          alt="Preview"
          onClick={() => fileInput.current?.click()}
        />
      ) : (
        <>
          <s.Desc>썸네일을 추가해주세요</s.Desc>
          <s.Button>
            <s.Icon
              src="/icon/icon_plus_blue.png"
              alt=""
              onClick={() => fileInput.current?.click()}
            />
          </s.Button>
        </>
      )}
    </s.Container>
  )
}

export default Index
