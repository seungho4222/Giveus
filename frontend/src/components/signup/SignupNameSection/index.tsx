import { themeState } from '@stores/theme'
import { SignupInputSectionType } from '@/types/authType'
import FullButton from '@common/FullButton'
import * as s from '@components/signup/SignupNameSection/SignupNameSection.styled'
import { useRecoilValue } from 'recoil'

const Index = (props: SignupInputSectionType) => {
  const theme = useRecoilValue(themeState)
  const { value, setValue, onClick } = props

  return (
    <s.Container>
      <s.Wrap>
        <s.Title>이름을 적어주세요</s.Title>
        <s.Input
          placeholder="이름"
          value={value}
          $theme={theme}
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
