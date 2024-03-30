import { colors, sizes } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $theme: number }>`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  min-width: ${sizes.minWidth};
  max-width: ${sizes.maxWidth};
  height: 100vh;
  background-color: ${props => (props.$theme ? '#fff' : colors.black01)};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
    width: 0; /* Remove scrollbar space */
    height: 0;
    background: transparent; /* Optional: just make scrollbar invisible */
    -webkit-appearance: none;
  }
  @media only screen and (min-width: 430px) {
    width: 430px;
  }
  @media only screen and (min-width: 600px) {
    width: 375px;
  }
`

export const Wrap = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
`

export const ModalName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  height: 70px;
`

export const Backdrop = styled.div`
  position: absolute;
  top: 10px;
  right: 1%;
  z-index: 100;
  margin: 1em;
  img {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`
