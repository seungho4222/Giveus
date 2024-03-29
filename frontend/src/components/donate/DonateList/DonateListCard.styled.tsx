import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin-inline: auto;
  margin-block: 5px;
  cursor: pointer;
`

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 68%;
  margin: 5px 0 5px 15px;
`

export const Dday = styled.div<{ $isDone: boolean }>`
  color: ${props => (props.$isDone ? colors.gray04 : colors.blue01)};
  font-weight: 600;
  font-size: 0.8em;
`

export const Title = styled.div`
  margin-bottom: 5%;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Amount = styled.div`
  color: ${colors.gray05};
  font-size: 0.8em;
`
