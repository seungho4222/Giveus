import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${colors.gray01};
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
