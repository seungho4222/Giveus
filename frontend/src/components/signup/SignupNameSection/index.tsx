import { SignupInputSectionType } from '@/types/signupType'
import FullButton from '@common/FullButton'
import * as s from '@components/signup/SignupNameSection/SignupNameSection.styled'

const Index = (props: SignupInputSectionType) => {
  const { value, setValue, onClick } = props

  return (
    <s.Container>
      <s.Wrap>
        <s.Title>이름을 적어주세요</s.Title>
        <s.Input
          placeholder="이름"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
      </s.Wrap>
      <FullButton text="확인" disabled={value.length === 0} onClick={onClick} />
    </s.Container>
  )
}

export default Index
