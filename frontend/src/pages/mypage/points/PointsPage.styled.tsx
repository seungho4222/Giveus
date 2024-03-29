import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Line = styled.div<{ $theme: number }>`
  display: flex;
  height: 4px;
  background-color: ${props => (props.$theme ? colors.gray02 : colors.black02)};
  margin-bottom: 12px;
`
