import * as l from '@components/login/LoginSection/LoginSection.styled'

const Index = () => {
  return (
    <l.Container>
      <l.Logo src="/img/img_logo.png" />
      <l.Desc>
        한 마음으로 모인 작은 기적,
        <br /> 함께 만들어 갑시다
      </l.Desc>
      <l.SubDesc>
        <l.Dash />
        SNS 계정으로 간편 가입하기
        <l.Dash />
      </l.SubDesc>
    </l.Container>
  )
}

export default Index
