import styled from 'styled-components'
import { colors } from '@/styles/theme'

export const Container = styled.div`
  display: flex;
  margin: 45px auto 10px auto;
  width: 90%;
  column-gap: 8px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${colors.gray02};
  padding: 9px 13px;
`

export const Icon = styled.img`
  margin-right: 8px;
`

export const Label = styled.div`
  font-size: 0.8em;
  font-weight: bold;
`
