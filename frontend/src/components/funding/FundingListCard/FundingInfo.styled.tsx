import styled from 'styled-components'
import { colors } from '@/styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Wrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

export const Title = styled.p`
  font-size: 0.8em;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Period = styled.p`
  font-size: 0.6em;
  color: ${colors.gray04};
`

export const Status = styled.div<{ $status: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${props =>
    props.$status ? colors.orange01 : colors.gray02};
  color: ${props => (props.$status ? 'white' : colors.gray04)};
  font-size: 0.5em;
  height: 1rem;
  padding-inline: 0.5em;
  margin-left: auto;
`
