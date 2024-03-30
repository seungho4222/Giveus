import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Wrap = styled.div<{ $theme: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.$theme ? colors.gray02 : colors.black02)};
  font-size: 1em;
  padding: 9px 13px;
  border-radius: 20px;
  margin-right: 12px;
  margin-bottom: 10px;
  white-space: pre;
  cursor: pointer;
`
