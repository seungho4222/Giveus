import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrap = styled.div`
  width: 400px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.blue01};
  color: #fff;
  height: 49px;
  border-radius: 5px;
  font-size: 1em;
  margin-block: 30px;
`