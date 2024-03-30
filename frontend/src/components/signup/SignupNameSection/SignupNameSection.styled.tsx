import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`

export const Title = styled.div`
  margin-top: 50px;
  font-size: 1.2em;
  font-weight: 500;
`

export const Input = styled.input<{ $theme: number }>`
  margin-top: 37px;
  border: none;
  padding: 11px;
  border-bottom: 1px solid
    ${props => (props.$theme ? '#cbcbcb' : colors.gray04)};
  font-weight: 500;
  background-color: ${props => (props.$theme ? '#fff' : colors.black01)};
`
