import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${colors.gray02};
`

export const Img = styled.img`
  width: 30%;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 68%;
  margin-left: auto;
`
