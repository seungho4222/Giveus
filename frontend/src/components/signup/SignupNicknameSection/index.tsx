import { themeState } from '@stores/theme'
import { SignupInputSectionType } from '@/types/authType'
import FullButton from '@common/FullButton'
import * as s from '@components/signup/SignupNicknameSection/SignupNicknameSection.styled'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { checkNickname } from '@apis/auth'

const Index = (props: SignupInputSectionType) => {
  const theme = useRecoilValue(themeState)
  const { value, setValue, onClick } = props

  const [checkState, setCheckState] = useState(false)
  const [usingState, setUsingState] = useState('')

  // 중복검사 버튼 클릭 시
  const onClickCheckButton = () => {
    checkNickname(value)
      .then(res =>
        res.exist
          ? setUsingState('이미 사용중인 닉네임입니다.')
          : setCheckState(true),
      )
      .catch(err => console.log(err))
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckState(false)
    setUsingState('')
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
      <s.ErrorText>{usingState}</s.ErrorText>
      <FullButton text="확인" disabled={!checkState} onClick={onClick} />
    </s.Container>
  )
}

export default Index
