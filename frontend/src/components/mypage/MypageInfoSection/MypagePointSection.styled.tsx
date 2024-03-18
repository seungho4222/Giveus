import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4px;

  img {
    width: 16px;
    height: 16px;
  }
  span {
    font-size: 0.8em;
    margin-left: 10px;
    color: #fff;
  }
`

export const PointBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue02};
  border-radius: 12px;
  height: 63px;
  color: #fff;
  font-size: 1.4em;
  font-weight: 600;
  margin-top: 8px;
`

export const Desc = styled.div`
  color: #fff;
  font-size: 0.6em;
  font-weight: 200;
  margin-top: 20px;
`
