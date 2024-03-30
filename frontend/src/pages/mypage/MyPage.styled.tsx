import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Wrap = styled.div`
  height: calc(100vh - 70px);
  padding-bottom: 60px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    background: transparent;
    -webkit-appearance: none;
  }
`
