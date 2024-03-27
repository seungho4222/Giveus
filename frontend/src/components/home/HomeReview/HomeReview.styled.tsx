import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  margin-top: 30px;
`

export const Title = styled.h1`
  font-size: 1.1em;
  font-weight: 700;
  padding-left: 4px;
`

export const Wrap = styled.div`
  display: flex;
  margin-top: 13px;
  padding-right: 6%;
  overflow-x: scroll;
  overflow-y: hidden;
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
