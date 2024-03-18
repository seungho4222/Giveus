import { Input } from '@common/input/Input'
import { Label } from '@common/input/Input.styled'
import { StyledInputContainer } from '@pages/fundingregister/FundingRegister.styled'
import Button from '@common/button/Button'
import { StyledLoginContainer, StyledH1Tag, StyledPTag } from './LoginContainr.styled'
import { useState } from 'react'
import { userLogin } from '@apis/user/user'
import { useRecoilState } from 'recoil'
import tokenState from '@/recoil/atoms/TokenAtom'


const LoginContainer = () => {

  const [loginData, setLoginData] = useState({
    userId: '',
    password: '',
  })

  
  const handleUserIdChange = (value:string) => {
    setLoginData((prevData) => ({...prevData, userid: value}))
  }

  const handlePasswordChange = (value:string) => {
    setLoginData((prevData) => ({...prevData, password: value}))
    console.log(loginData)
  }

  const [accessToken, setAccessToken] = useRecoilState(tokenState)

  const onLogin = async () => {
    try {
      console.log('로그인 ㅎㅎ')
      // const response = await userLogin(loginData)

    } catch {

    }
  }

  return (
    <StyledLoginContainer>
      <StyledH1Tag>Welcome Back</StyledH1Tag>
      <StyledPTag>Giveus 병원 페이지에 오신 것을 환영합니다</StyledPTag>
      <StyledInputContainer>
        <Label htmlFor="id">아이디</Label>
        <Input
          id={'id'}
          placeholder={'아이디를 입력해주세요'}
          value={loginData.userId}
          onInputChange={handleUserIdChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type={'password'}
          id={'password'}
          placeholder={'비밀번호를 입력해주세요'}
          value={loginData.password}
          onInputChange={handlePasswordChange}
          onEnterKeyUp={onLogin}
        />
      </StyledInputContainer>
      <Button
        $backgroundColor={'#4382ff'}
        width={'300px'}
        height={'45px'}
        $borderRadius={'10px'}
        $children={'SIGN IN'}
        onButtonClick={onLogin}
      ></Button>
    </StyledLoginContainer>
  )
}

export default LoginContainer
