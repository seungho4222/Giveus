import { colors, sizes } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  min-width: ${sizes.minWidth};
  max-width: ${sizes.maxWidth};
  height: 100vh;
  background-color: #fff;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
    width: 0; /* Remove scrollbar space */
    height: 0;
    background: transparent; /* Optional: just make scrollbar invisible */
    -webkit-appearance: none;
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
  padding-block: 1em;
  border-bottom: 2px solid ${colors.gray02};
  font-weight: 600;
`

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  margin: 1em;
  img {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`
