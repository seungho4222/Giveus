import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrap = styled.div`
  display: flex;
`

export const Tap = styled.div<{ $active: boolean; $theme: number }>`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-block: 1.4em;
  border-bottom: 2px solid
    ${props =>
      props.$active ? (props.$theme ? '#000' : '#fff') : colors.gray04};
  color: ${props =>
    props.$active ? (props.$theme ? '#000' : '#fff') : colors.gray04};
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
`
