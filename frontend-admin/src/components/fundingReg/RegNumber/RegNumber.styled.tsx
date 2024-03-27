import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 20px 0px;
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 0.8em;
`

export const Input = styled.input`
  width: 190px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${colors.gray03};
`

export const Minus = styled.div`
  margin: auto;
`

export const SubWrap = styled.div`
  display: flex;
`

export const GenderInput = styled.input`
  width: 40px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid ${colors.gray03};
`

export const Star = styled.div`
  margin: 8px 0 0 5px;
  font-size: 3em;
  color: ${colors.gray04};
`
