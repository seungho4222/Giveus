import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 1em auto 0 auto;
  justify-content: flex-end;
`

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: ${colors.gray04};
  font-size: 0.8em;
  align-items: center;
  cursor: pointer;
  img {
    width: 10px;
    height: 6px;
    margin-left: 8px;
  }
`
