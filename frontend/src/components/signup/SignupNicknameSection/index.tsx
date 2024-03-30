import { themeState } from '@stores/theme'
import { SignupInputSectionType } from '@/types/authType'
import FullButton from '@common/FullButton'
import * as s from '@components/signup/SignupNicknameSection/SignupNicknameSection.styled'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'

const Index = (props: SignupInputSectionType) => {
  const theme = useRecoilValue(themeState)
  const { value, setValue, onClick } = props

  const [checkState, setCheckState] = useState(false)

  // 중복검사 버튼 클릭 시
  const onClickCheckButton = () => {
    setCheckState(true)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckState(false)
    setValue(e.target.value)
  }

  return (
    <s.Container>
      <s.Wrap>
        <s.Title>닉네임을 적어주세요</s.Title>
        <s.Input
          placeholder="닉네임"
          value={value}
          $theme={theme}
          onChange={onChange}
        />
        <s.CheckButton onClick={onClickCheckButton}>중복검사</s.CheckButton>
      </s.Wrap>
      <s.ErrorText>이미 사용중인 닉네임입니다.</s.ErrorText>
      <FullButton text="확인" disabled={!checkState} onClick={onClick} />
    </s.Container>
  )
}

export default Index
