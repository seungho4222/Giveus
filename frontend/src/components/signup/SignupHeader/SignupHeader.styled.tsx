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
  }
`

export const Bar = styled.div`
  display: flex;
  position: relative;
  background-color: #f4f4f4;
  height: 4px;
  bottom: 0;
`

export const CurrentBar = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: ${colors.blue01};
`
