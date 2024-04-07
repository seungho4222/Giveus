import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $theme: number }>`
  display: flex;
  width: 100%;
  margin-inline: auto;
  padding: 15px 0;
  border-bottom: 1px solid
    ${props => (props.$theme ? colors.gray02 : colors.black02)};
  cursor: pointer;
`

export const Img = styled.img`
  width: 30%;
  height: 85px;
  border-radius: 6px;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 68%;
  margin-left: auto;
  padding: 2px 0;
`
