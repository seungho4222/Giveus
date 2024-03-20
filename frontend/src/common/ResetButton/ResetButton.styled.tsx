import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  column-gap: 10%;
  color: ${colors.gray04};
  white-space: nowrap;
  cursor: pointer;
`

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`
