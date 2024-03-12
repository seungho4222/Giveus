import { StringStateType } from '@/types/commonType'
import FullButton from '@common/FullButton'
import * as s from '@components/signup/SignupNameSection/SignupNameSection.styled'

const Index = (props: StringStateType) => {
  const { value, setValue } = props

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
      <FullButton
        text="확인"
        disabled={value.length === 0}
        onClick={() => console.log()}
      />
    </s.Container>
  )
}

export default Index
