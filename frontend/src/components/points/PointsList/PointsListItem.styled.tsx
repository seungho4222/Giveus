import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $theme: number }>`
  display: flex;
  padding: 16px 16px;
  justify-content: space-between;
  border-bottom: 1px solid
    ${props => (props.$theme ? '#eeeeee' : colors.black02)};
`

export const Left = styled.div`
  display: flex;
`

export const Date = styled.div`
  display: flex;
  font-size: 0.7em;
  font-weight: 500;
  color: ${colors.gray04};
`

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 9px;
  row-gap: 20px;
`

export const Type = styled.div`
  font-size: 0.7em;
  font-weight: 400;
`

export const Content = styled.div`
  font-size: 1em;
  font-weight: 500;
`

export const AmountWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`

export const Pay = styled.div<{ $type: string }>`
  font-size: 1.1em;
  font-weight: 600;
  color: ${props => (props.$type === '충전' ? colors.blue01 : '#676F83')};
`

export const Amount = styled.div<{ $theme: number }>`
  font-weight: 500;
  font-size: 0.8em;
  color: ${props => (props.$theme ? colors.gray04 : colors.gray05)};
`
