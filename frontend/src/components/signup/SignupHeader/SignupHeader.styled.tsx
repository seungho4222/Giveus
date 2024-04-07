import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 69px;
  padding-left: 5%;

  img {
    width: 10px;
    height: 16px;
    cursor: pointer;
  }
`

export const Bar = styled.div<{ $theme: number }>`
  display: flex;
  position: relative;
  background-color: ${props => (props.$theme ? '#f4f4f4' : colors.black02)};
  height: 4px;
  bottom: 0;
`

export const CurrentBar = styled.div<{ $stage: number }>`
  right: ${props => props.$stage === 1 && 0};
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: ${colors.blue01};
`
