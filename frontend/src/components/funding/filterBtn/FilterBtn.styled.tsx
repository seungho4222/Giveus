import styled from 'styled-components'
import { colors } from '@/styles/theme'

export const Container = styled.div`
  display: flex;
  margin-inline: 10px;
`

export const Button = styled.button`
  border-radius: 20px;
  background-color: ${colors.gray02};
  margin: 5px;
  padding: 9px 13px;
`

export const Icon = styled.img`
  margin-right: 8px;
`
