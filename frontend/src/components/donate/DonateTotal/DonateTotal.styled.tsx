import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8%;
  width: 100%;
  height: 18%;
  background-color: ${colors.blue01};
  color: #fff;
  padding-block: 5% 10%;
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
