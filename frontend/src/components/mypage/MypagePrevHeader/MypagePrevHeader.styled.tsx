import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $isDonate: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding-inline: 5%;
  height: 55px;
  background-color: ${props => (props.$isDonate ? colors.blue01 : '#fff')};
  color: ${props => (props.$isDonate ? '#fff' : '#000')};
`

export const Image = styled.img`
  width: 9px;
  height: 16px;
  cursor: pointer;
`

export const Title = styled.div`
  font-weight: 600;
`

export const EmptyBox = styled.div`
  width: 9px;
`
