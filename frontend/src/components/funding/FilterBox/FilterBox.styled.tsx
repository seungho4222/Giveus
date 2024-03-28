import styled from 'styled-components'
import { colors } from '@/styles/theme'

export const Container = styled.div`
  display: flex;
  margin-inline: auto;
  padding-block: 45px 10px;
  width: 90%;
  column-gap: 8px;
`

export const Button = styled.button<{ $theme: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${props => (props.$theme ? colors.gray02 : colors.black02)};
  padding: 9px 13px;
`

export const Icon = styled.img`
  margin-right: 8px;
`

export const Label = styled.div<{ $theme: number }>`
  font-size: 0.8em;
  font-weight: bold;
  color: ${props => (props.$theme ? '#000' : '#fff')};
`
