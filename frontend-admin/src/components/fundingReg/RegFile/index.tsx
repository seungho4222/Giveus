import * as r from '@/components/fundingReg/RegFile/RegFile.styled'
import { useRef, useState } from 'react'

const index = () => {
  const file = false
  const fileInput = useRef<HTMLInputElement | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  return (
    <r.Container>
      <r.Box>
        {file ? (
          <r.Img />
        ) : (
          <r.Wrap onClick={() => fileInput.current?.click()}>
            {previewImage ? (
              <r.PreviewImage src={previewImage} alt="Preview" />
            ) : (
              <>
                <r.Icon src="/icon/icon_reg_file.png" />
                <r.Text>진단서 이미지 파일을 업로드 해주세요</r.Text>
              </>
            )}
          </r.Wrap>
        )}
      </r.Box>
      <r.Input
        type="file"
        accept="image/*"
        ref={fileInput}
        onChange={handleFileChange}
      />
      <r.Button onClick={() => fileInput.current?.click()}>파일 선택</r.Button>
    </r.Container>
  )
}

export default index
