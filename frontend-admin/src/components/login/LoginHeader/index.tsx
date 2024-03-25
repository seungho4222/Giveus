import * as l from '@components/login/LoginHeader/LoginHeader.styled'

const index = () => {
  return (
    <l.Container>
      <l.Logo>(로고) GIVEUS Hospital</l.Logo>
      <l.Wrap>
        <l.Button>
          <l.Icon src="/icon/icon_signup.png" alt="" />
          SIGN UP
        </l.Button>
        <l.Button>
          <l.Icon src="/icon/icon_login.png" alt="" />
          LOG IN
        </l.Button>
      </l.Wrap>
      <l.AppButton>GIVEUS</l.AppButton>
    </l.Container>
  )
}

export default index
