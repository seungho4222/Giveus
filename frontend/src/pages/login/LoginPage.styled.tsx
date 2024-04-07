import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Theme = styled.div<{ $theme: number }>`
  background-color: ${props => (props.$theme ? '#fff' : '#000')};
  background: ${props =>
    props.$theme ? `linear-gradient(180deg, #F2F7FF 0%, #FFF 100%);` : ''};
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  padding: 68px 0;
  height: 100dvh;
`

export const SubDesc = styled.div`
  display: flex;
  margin: auto 0 20px;
  align-items: center;
  justify-content: center;
  color: ${colors.gray04};
  font-weight: 600;
  font-size: 0.8em;
  column-gap: 2%;
  white-space: nowrap;
`

export const Dash = styled.div`
  display: flex;
  background-color: ${colors.gray04};
  width: 80px;
  height: 1px;
`
