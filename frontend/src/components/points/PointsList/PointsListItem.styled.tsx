import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 13px 16px;
  height: 72px;
  justify-content: space-between;
  margin-bottom: 10px;
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
`

export const Type = styled.div`
  font-size: 0.7em;
  font-weight: 500;
`

export const Content = styled.div`
  font-size: 1em;
  font-weight: 600;
  padding-bottom: 2%px;
`

export const AmountWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`

export const Pay = styled.div<{ $type: string }>`
  font-size: 1.2em;
  font-weight: 700;
  color: ${props => (props.$type === '충전' ? colors.blue01 : '#676F83')};
`

export const Amount = styled.div`
  font-weight: 500;
  font-size: 0.8em;
  color: ${colors.gray04};
`
