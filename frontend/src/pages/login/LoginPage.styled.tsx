import styled from 'styled-components'

export const Theme = styled.div<{ $theme: number }>`
  background-color: ${props => (props.$theme ? '#fff' : '#000')};
  background: ${props =>
    props.$theme ? `linear-gradient(180deg, #F2F7FF 0%, #FFF 100%);` : ''};
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  padding: 68px 0;
  height: 100vh;
`
