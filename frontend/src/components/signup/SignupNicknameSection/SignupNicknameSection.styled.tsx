import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Title = styled.div`
  margin-top: 50px;
  font-size: 1.2em;
  font-weight: 500;
`

export const Input = styled.input`
  margin-top: 37px;
  border: none;
  padding: 11px 80px 11px 11px;
  border-bottom: 1px solid #cbcbcb;
  font-weight: 500;
`

export const CheckButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 0px;
  font-size: 0.7em;
  border: 1px solid ${colors.gray04};
  padding: 6px 8px;
  border-radius: 15px;
  color: ${colors.gray04};
  font-weight: 500;
`

export const ErrorText = styled.div`
  margin-bottom: auto;
  font-size: 0.8em;
  color: #f04452;
  font-weight: 500;
  margin-top: 10px;
`
