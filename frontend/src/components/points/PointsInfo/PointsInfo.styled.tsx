import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.section<{ $theme: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 88%;
  margin: 0 auto;
  background-color: ${props => (props.$theme ? colors.blue01 : colors.black02)};
  border-radius: 10px;
  height: 123px;
  padding: 14px 15px;
  box-shadow: 0px 0px 20px 2px
    rgba(149, 157, 177, ${props => (props.$theme ? '0.2' : '0.1')});
`

export const Top = styled.div`
  display: flex;
  color: #fff;
  font-size: 0.8em;
  img {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
`

export const PointWrap = styled.div<{ $theme: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: #fff;
    font-size: 1.4em;
    font-weight: 600;
  }
  button {
    width: 67px;
    height: 27px;
    background-color: ${props => (props.$theme ? '#fff' : colors.blue01)};
    color: ${props => (props.$theme ? colors.blue01 : '#fff')};
    border-radius: 12px;
    font-weight: 500;
    font-size: 0.9em;
  }
`

export const Desc = styled.div<{ $theme: number }>`
  font-size: 0.7em;
  color: ${props => (props.$theme ? colors.gray01 : colors.gray04)};
  font-weight: 300;
`
