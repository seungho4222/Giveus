import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $theme: number }>`
  display: flex;
  width: 90%;
  margin-inline: auto;
  margin-block: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid
    ${props => (props.$theme ? colors.gray02 : colors.black02)};
  cursor: pointer;
`

export const Img = styled.img`
  width: 30%;
  height: 10vh;
  border-radius: 6px;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 68%;
  margin-left: auto;
`
