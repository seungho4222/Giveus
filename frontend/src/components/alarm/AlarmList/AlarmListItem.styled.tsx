import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $isRead: number }>`
  display: flex;
  border-bottom: 1px solid ${colors.gray02};
  border-top: 1px solid ${colors.gray02};
  background-color: ${props => props.$isRead === 0 && '#EFF3FA'};
  cursor: pointer;
`

export const Wrap = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  padding: 18px 0;
`

export const ImgWrap = styled.div<{ $isRead: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${props => (props.$isRead === 0 ? '#fff' : colors.gray02)};
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`

export const Detail = styled.div`
  margin-bottom: 12px;
`

export const Content = styled.div`
  font-size: 0.8em;
  margin-bottom: 6px;
`

export const Date = styled.div`
  font-size: 0.8em;
  color: ${colors.gray04};
`
