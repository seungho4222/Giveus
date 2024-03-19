import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 5% auto 10% auto;
`

export const Condition = styled.div`
  font-weight: 600;
`

export const Wrap = styled.div`
  display: flex;
  column-gap: 3%;
  margin-block: 5% 10%;
`

export const Button = styled.button<{ $checked: boolean }>`
  border: 1px solid ${props => (props.$checked ? colors.blue01 : colors.gray04)};
  border-radius: 20px;
  padding: 0.5em;
  font-size: 0.8em;
  color: ${props => (props.$checked ? colors.blue01 : colors.gray04)};
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 375px;
  position: fixed;
  bottom: 0;
  padding: 1em;
  background-color: white;
`
