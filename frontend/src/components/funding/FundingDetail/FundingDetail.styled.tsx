import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrap = styled.div`
  display: flex;
`

export const Tap = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-block: 1.4em;
  border-bottom: 2px solid ${props => (props.$active ? 'black' : 'white')};
  font-size: 0.8em;
`