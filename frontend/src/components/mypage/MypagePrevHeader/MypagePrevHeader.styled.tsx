import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $theme: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding-inline: 5%;
  height: 70px;
  position: sticky;
  top: 0;
  background-color: ${props => (props.$theme ? '#fff' : colors.black01)};
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
