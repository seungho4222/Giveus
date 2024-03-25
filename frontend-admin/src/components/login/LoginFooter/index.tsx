import * as l from '@components/login/LoginFooter/LoginFooter.styled'

const index = () => {
  return (
    <l.Container>
      <l.Wrap>
        <l.Copyright>
          @ 2024, Made with ❤️ by <l.Blue>GIVEUS Team</l.Blue> &{' '}
          <l.Blue>SSAFY</l.Blue> for a better web
        </l.Copyright>
        <l.Menu>
          <l.Text>GIVEUS</l.Text>
          <l.Text>SSAFY</l.Text>
          <l.Text>C206</l.Text>
          <l.Text>License</l.Text>
        </l.Menu>
      </l.Wrap>
    </l.Container>
  )
}

export default index
