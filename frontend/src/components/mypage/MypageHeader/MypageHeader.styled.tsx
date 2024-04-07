import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.header<{ $theme: number }>`
  height: 70px;
  display: flex;
  padding-left: 7.5%;
  align-items: center;
  font-weight: 700;
  font-size: 1.2em;
  position: sticky;
  top: 0;
  background-color: ${props => (props.$theme ? '#fff' : colors.black01)};
`
