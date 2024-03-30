import styled from 'styled-components'
import { sizes } from '@styles/theme'

export const Container = styled.header<{ $theme: number }>`
  display: flex;
  position: fixed;
  width: 100%;
  min-width: ${sizes.minWidth};
  max-width: ${sizes.maxWidth};
  top: 0;
  height: 70px;
  z-index: 100;
  background-color: ${props =>
    props.$theme === 1 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(28,23,25,0.8)'};

  @media only screen and (min-width: 430px) {
    width: 430px;
  }
  @media only screen and (min-width: 600px) {
    width: 375px;
  }
`

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`

export const Logo = styled.div`
  width: 100px;
  height: 35px;

  img {
    width: 100%;
    height: 100%;
  }
`
