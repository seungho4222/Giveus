import { StyledInputContainer } from '@/pages/fundingregister/FundingRegister.styled'
import { Label } from '@/common/input/Input.styled'
import { Input } from '@/common/input/Input'
import Button from '@/common/button/Button'
import { useState } from 'react'
import {
  StyledSignUpContainer,
  StyledSignUpH1Tag,
  StyledSignUpPTag,
} from './SignUpContainer.styled'

const SignUpContainer = () => {
  const [signUpData, setSignUpData] = useState({
    name: '',
    id: '',
    password: '',
  })

  const handleNameChange = (value: string) => {
    setSignUpData(prevData => ({ ...prevData, name: value }))
  }

  const handleIdChange = (value: string) => {
    setSignUpData(prevData => ({ ...prevData, id: value }))
  }

  const handlePasswordChange = (value: string) => {
    setSignUpData(prevData => ({ ...prevData, password: value }))
  }

  const onSignUp = () => {
    try {
      // const response = await userSignUp(signUpData)
    } catch {}
  }

  return (
    <StyledSignUpContainer>
      <StyledSignUpH1Tag>Register with</StyledSignUpH1Tag>

      <StyledInputContainer>
        <Label htmlFor="name">병원명</Label>
        <Input
          id={'name'}
          placeholder={'병원명을 입력해주세요'}
          value={signUpData.name}
          onInputChange={handleNameChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Label htmlFor="id">아이디</Label>
        <Input
          id={'id'}
          placeholder={'아이디를 입력해주세요'}
          value={signUpData.id}
          onInputChange={handleIdChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type={'password'}
          id={'password'}
          placeholder={'비밀번호를 입력해주세요'}
          value={signUpData.password}
          onInputChange={handlePasswordChange}
          onEnterKeyUp={onSignUp}
        />
      </StyledInputContainer>
      <Button
        $backgroundColor={'#4382ff'}
        width={'300px'}
        height={'45px'}
        $borderRadius={'10px'}
        $children={'SIGN IN'}
        onButtonClick={onSignUp}
      ></Button>
      <StyledSignUpPTag>Already have an account? Sign in</StyledSignUpPTag>
    </StyledSignUpContainer>
  )
}

export default SignUpContainer
