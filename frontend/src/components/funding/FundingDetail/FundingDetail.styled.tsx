import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrap = styled.div`
  display: flex;
`

export const Tap = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-block: 1.4em;
  border-bottom: 2px solid ${props => (props.$active ? 'black' : `${colors.gray02}`)};
  color: ${props => (props.$active ? 'black' : `${colors.gray04}`)};
  font-size: 0.8em;
  font-weight: 600;
  cursor: pointer;
`