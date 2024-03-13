import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 375px;
  position: fixed;
  bottom: 0;
  padding: 1em;
  background-color: white;
`

export const Button = styled.button`
  width: 100%;
  padding: 0.8em;
  border-radius: 5px;
  background-color: ${colors.blue01};
  color: white;
`
