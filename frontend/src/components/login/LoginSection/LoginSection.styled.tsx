import styled from 'styled-components'
import { colors } from '@styles/theme'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`

export const Logo = styled.img`
  width: 220px;
  margin-top: 40%;
  margin-inline: auto;
`

export const Desc = styled.div`
  font-size: 1.1em;
  font-weight: 600;
  margin-top: 10px;
  line-height: 1.4;
  text-align: center;
`

export const SubDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.gray04};
  font-weight: 600;
  font-size: 0.8em;
  margin-top: 210px;
  column-gap: 2%;
  white-space: nowrap;
`

export const Dash = styled.div`
  display: flex;
  background-color: ${colors.gray04};
  width: 80px;
  height: 1px;
`
