import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  background-color: ${colors.blue01};
  color: #fff;
  height: 14vh;
`

export const Desc = styled.div`
  color: #fff;
  font-size: 0.8em;
`

export const Amount = styled.div`
  color: #fff;
  font-size: 1.5em;
  font-weight: 600;
`
