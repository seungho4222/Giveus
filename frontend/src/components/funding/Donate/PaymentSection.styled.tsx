import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-bottom: 2px solid ${colors.gray02};
`

export const SectionTitle = styled.div`
  font-weight: 600;
`

export const Wrap = styled.div`
  display: flex;
  column-gap: 1em;
`

export const Button = styled.button<{ $active: boolean }>`
  display: flex;
  border: 1px solid ${props => (props.$active ? colors.blue01 : colors.gray03)};
  color: ${props => (props.$active ? colors.blue01 : colors.gray04)};
  border-radius: 6px;
  padding: 0.5em;
  margin-block: 1em;
`

export const RadioInut = styled.input`
  border: none;
  margin-right: 0.5em;
  margin-block: auto;
`

export const Logo = styled.img`
  height: 1em;
`
