import { colors, sizes } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 5% auto 10% auto;
`

export const Condition = styled.div`
  font-weight: 600;
  font-size: 1em;
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
  font-size: 0.9em;
  color: ${props => (props.$checked ? colors.blue01 : colors.gray04)};
`

export const AgeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 7%;
`

export const StartAge = styled.div<{ $age: number }>`
  font-size: 0.8em;
  width: 8%;
  white-space: nowrap;
  color: ${props =>
    props.$age === 0 || props.$age === 100 ? colors.gray04 : colors.blue01};
`

export const EndAge = styled.div<{ $age: number }>`
  display: flex;
  justify-content: end;
  font-size: 0.8em;
  width: 11%;
  color: ${props =>
    props.$age === 0 || props.$age === 100 ? colors.gray04 : colors.blue01};
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: ${sizes.minWidth};
  max-width: ${sizes.maxWidth};
  position: fixed;
  bottom: 0;
  padding: 1em;
  @media only screen and (min-width: 430px) {
    width: 430px;
  }
  @media only screen and (min-width: 600px) {
    width: 375px;
  }
`
