import * as r from '@/components/fundingReg/RegFile/RegFile.styled'

const index = () => {
  const file = false

  return (
    <r.Container>
      <r.Box>
        {file ? (
          <r.Img />
        ) : (
          <r.Wrap>
            <r.Icon src="/icon/icon_reg_file.png" />
            <r.Text>진단서 이미지 파일을 업로드 해주세요</r.Text>
          </r.Wrap>
        )}
      </r.Box>
      <r.Button>파일 선택</r.Button>
    </r.Container>
  )
}

export default index
