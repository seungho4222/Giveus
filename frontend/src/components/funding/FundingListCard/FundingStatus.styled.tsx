import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Text = styled.div`
  display: flex;
  font-size: 0.7em;
`

export const Percent = styled.div`
  color: ${colors.orange01};
  margin-right: 6px;
`

export const Progress = styled.div`
  position: relative;
  background-color: ${colors.gray02};
  border-radius: 20px;
  width: 100%;
  height: 8px;
`

export const ProgressStatus = styled.div<{ $width: string }>`
  position: absolute;
  background-color: ${colors.blue01};
  border-radius: 20px;
  height: 8px;
  width: ${props => (props.$width)};
`