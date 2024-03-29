import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
`

export const Button = styled.button`
  background-color: ${colors.blue01};
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  width: 100px;
  margin-top: 30px;
`
