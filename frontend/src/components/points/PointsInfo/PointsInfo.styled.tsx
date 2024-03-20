import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 10px auto;
`

export const Top = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  span {
    font-size: 1.1em;
    font-weight: 500;
  }
`

export const PointBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${colors.blue02};
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  height: 63px;
  margin: 16px 0 10px 0;
  color: #fff;
  font-weight: 600;
  font-size: 1.4em;
`

export const ChargeButton = styled.button`
  position: absolute;
  background-color: #fff;
  color: ${colors.blue01};
  right: 13px;
  border-radius: 12px;
  width: 52px;
  height: 27px;
  font-size: 0.7em;
  font-weight: 500;
`
