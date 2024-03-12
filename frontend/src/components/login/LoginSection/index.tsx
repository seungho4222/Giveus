import * as l from '@components/login/LoginSection/LoginSection.styled'

const Index = () => {
  return (
    <l.Container>
      <l.Logo>GIVEUS</l.Logo>
      <l.Desc>
        간편 로그인으로 더 다양한
        <br /> 서비스를 이용하세요
      </l.Desc>
      <l.SubDesc>
        <img src="icon/icon_bulb.png" alt="" />
        3초 만에 빠른 회원가입
      </l.SubDesc>
    </l.Container>
  )
}

export default Index
