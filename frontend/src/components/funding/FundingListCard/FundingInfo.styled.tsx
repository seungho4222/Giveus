import styled from 'styled-components'
import { colors } from '@/styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

export const Title = styled.p`
  font-size: 0.8em;
  font-weight: bold;
`

export const Period = styled.p`
  font-size: 0.6em;
  color: ${colors.gray04};
`

export const Status = styled.div`
  border-radius: 20px;
  background-color: ${colors.orange01};
  color: white;
  font-size: 0.5em;
  height: 12px;
  padding-inline: 4px;
  margin-left: auto;
`
