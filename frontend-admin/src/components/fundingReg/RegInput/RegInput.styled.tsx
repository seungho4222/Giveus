import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 20px 0px;
`

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 0.8em;
`

export const Input = styled.input`
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${colors.gray03};
`
