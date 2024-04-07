import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;
`

export const ListFalse = styled.div`
  color: ${colors.gray04};
`

export const ListTrue = styled.div`
  padding-bottom: 0.5em;
  font-size: 1em;
  font-weight: 600;
  span {
    color: ${colors.orange01};
  }
`

export const Card = styled.div<{ $theme: number }>`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid
    ${props => (props.$theme ? colors.gray02 : colors.black02)};
  padding: 10px 0;
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 5px;
`

export const Date = styled.div<{ $theme: number }>`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  color: ${props => (props.$theme ? colors.gray05 : colors.gray04)};
`

export const Desc = styled.div`
  color: ${colors.blue01};
  font-size: 0.9em;
`

export const SubWrap = styled.div`
  display: flex;
  column-gap: 10px;
`

export const Img = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
`

export const Nickname = styled.div`
  display: flex;
  align-items: center;
  font-size: 1em;
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  font-weight: 600;
`
