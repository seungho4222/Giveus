import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $img: string }>`
  position: relative;
  width: 100%;
  height: 40vh;
  background-image: url(${props => props.$img});
  background-size: cover;
`

export const BackBtn = styled.img`
  position: absolute;
  width: 0.7em;
  margin: 5%;
  cursor: pointer;
`

export const Wrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  padding-bottom: 1em;
  margin-inline: 5%;
  width: 90%;
`

export const Title = styled.div`
  color: white;
  font-size: 1.2em;
  font-weight: 600;
`

export const Status = styled.div<{ $status: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${props =>
    props.$status ? colors.orange01 : colors.gray02};
  color: ${props => (props.$status ? 'white' : colors.gray04)};
  font-size: 0.5em;
  height: 1rem;
  padding-inline: 0.5em;
  margin-block: auto;
`
