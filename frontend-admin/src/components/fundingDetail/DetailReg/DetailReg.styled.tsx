import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% 5% 0 5%;
  width: 20%;
`

export const Title = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 20px;
  white-space: nowrap;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  padding: 20px;
  background-color: ${colors.gray02};
  border-radius: 20px;
`

export const SubWrap = styled.div`
  width: 100%;
  height: 30vh;
`

export const Img = styled.img`
  width: 100%;
  height: 75%;
  margin: auto;
  border-radius: 5px;
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const Button = styled.button<{
  $isReview: boolean
  $isDisabled: boolean
}>`
  border-radius: 15px;
  margin: 5px 0;
  padding: 5px 8px;
  color: #fff;
  background-color: ${props =>
    props.$isReview ? colors.blue01 : colors.orange01};
  font-size: 0.8em;
  opacity: ${props => (props.$isDisabled ? '0.5' : '1')};
  border: 0.5px solid gray;
`
