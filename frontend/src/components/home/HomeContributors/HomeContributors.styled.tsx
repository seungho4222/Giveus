import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 88%;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-size: 1.2em;
  font-weight: 700;
  padding-left: 4px;
`

export const Wrap = styled.div<{ $theme: number }>`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding: 23px 20px;
  box-shadow: 0px 0px 20px 2px
    rgba(149, 157, 177, ${props => (props.$theme ? '0.2' : '0.1')});
  border-radius: 10px;
  background-color: ${props => (props.$theme ? '#fff' : colors.black02)};
`

export const Line = styled.div`
  display: flex;
  height: 1px;
  width: 100%;
  background-color: #cacfd9;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 55%;
  text-align: left;
  color: ${colors.gray04};
  font-weight: 500;
  font-size: 0.9em;
  margin-top: 20px;
  img {
    width: 6px;
    height: 13px;
    margin-left: 15px;
  }
`
