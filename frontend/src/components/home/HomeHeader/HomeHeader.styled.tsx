import styled from 'styled-components'
import { colors } from '@styles/theme'

export const Container = styled.header`
  display: flex;
  position: fixed;
  width: 375px;
  top: 0;
  height: 45px;
  z-index: 100;
  background-color: #fff;
`

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`

export const Logo = styled.div`
  font-weight: 700;
  font-size: 1.2em;
  color: ${colors.blue01};
`
