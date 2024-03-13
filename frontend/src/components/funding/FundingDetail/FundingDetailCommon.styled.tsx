import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url("/img/img_data.png");
  background-size: cover;
`

export const BackBtn = styled.img`
  position: absolute;
  width: 0.7em;
  margin: 1em;
`

export const Wrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  padding: 1em;
  width: 100%;
`

export const Title = styled.div`
  color: white;
  font-size: 1.2em;
  font-weight: 600;
`

export const Status = styled.div`
  border-radius: 20px;
  background-color: ${colors.orange01};
  color: white;
  font-size: 0.5em;
  height: 12px;
  padding-inline: 4px;
  margin-block: auto;
`
