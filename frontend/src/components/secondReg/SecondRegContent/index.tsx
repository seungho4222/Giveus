import { StringStateType } from '@/types/commonType'
import * as s from '@components/secondReg/SecondRegContent/SecondRegContent.styled'

const Index = (props: StringStateType) => {
  const { value, setValue } = props

  const handleValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  return (
    <s.Container>
      <s.Desc>소개글을 작성해주세요</s.Desc>
      <s.SubDesc
        value={value}
        onChange={handleValue}
        placeholder="이 내용은 펀딩글에 작성됩니다.&#13;&#10;&#13;&#10;환자의 성명, 수술의 시급성에 대한 간략한 정보를 포함해주세요.&#13;&#10;&#13;&#10;더 많은 사람들에게 기부를 독려하도록 글을 작성해주세요."
      ></s.SubDesc>
    </s.Container>
  )
}

export default Index
