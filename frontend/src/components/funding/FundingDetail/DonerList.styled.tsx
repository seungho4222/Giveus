import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
`

export const ListFalse = styled.div`
  color: ${colors.gray04};
`

export const ListTrue = styled.div`
  padding-bottom: 0.5em;
  font-size: 0.9em;
  font-weight: 600;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${colors.gray02};
  padding-block: 0.5em;
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 5px;
`

export const Date = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7em;
  color: ${colors.gray05};
`

export const Desc = styled.div`
  color: ${colors.blue01};
  font-size: 0.8em;
`

export const SubWrap = styled.div`
  display: flex;
  column-gap: 10px;
`

export const Img = styled.img`
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
`

export const Nickname = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  font-weight: 600;
`
