import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 88%;
  margin: 25px auto;
  justify-content: flex-end;
`

export const Wrap = styled.div<{ $theme: number }>`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: ${props => (props.$theme ? colors.gray04 : colors.gray03)};
  font-size: 0.8em;
  align-items: center;
  cursor: pointer;
  img {
    width: 10px;
    height: 6px;
    margin-left: 8px;
  }
`
