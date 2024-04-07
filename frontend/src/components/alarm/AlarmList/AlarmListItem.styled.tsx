import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $isRead: boolean; $theme: number }>`
  display: flex;
  border-bottom: 1px solid
    ${props => (props.$theme ? colors.gray02 : colors.gray05)};
  border-top: 1px solid
    ${props => (props.$theme ? colors.gray02 : colors.gray05)};
  background-color: ${props =>
    !props.$isRead
      ? props.$theme
        ? '#EFF3FA'
        : colors.black02
      : props.$theme
      ? '#fff'
      : colors.black01};
  cursor: pointer;
`

export const Wrap = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  padding: 18px 0;
`

export const ImgWrap = styled.div<{ $isRead: boolean; $theme: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${props =>
    props.$isRead
      ? props.$theme
        ? '#fff'
        : colors.black01
      : props.$theme
      ? colors.gray02
      : colors.black02};
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`

export const Detail = styled.div`
  margin-bottom: 12px;
  font-size: 1em;
  font-weight: 500;
`

export const Content = styled.div`
  font-size: 0.9em;
  margin-bottom: 6px;
  font-weight: 500;
`

export const Date = styled.div`
  font-size: 0.9em;
  color: ${colors.gray04};
  font-weight: 500;
`
