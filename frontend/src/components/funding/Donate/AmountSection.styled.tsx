import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-bottom: 2px solid ${colors.gray02};
`

export const SectionTitle = styled.div``

export const Input = styled.input`
  margin-top: 37px;
  border: none;
  padding: 11px;
  border-bottom: 1px solid #cbcbcb;
  font-weight: 500;
`
