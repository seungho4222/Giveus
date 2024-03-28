import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 50px;
`

export const Button = styled.button<{ $theme: number }>`
  font-weight: 500;
  color: ${props => (props.$theme === 1 ? '#000' : '#fff')};
`
