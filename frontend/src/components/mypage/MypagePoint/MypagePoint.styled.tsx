import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $theme: number }>`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  background-color: ${props => (props.$theme ? colors.gray02 : colors.black02)};
  border-radius: 10px;
  padding: 14px 16px;
`

export const Title = styled.div`
  font-weight: 500;
  font-size: 0.8em;
`

export const Point = styled.div`
  font-weight: 600;
  font-size: 1.3em;
  color: ${colors.blue01};
  margin-top: 6px;
`
