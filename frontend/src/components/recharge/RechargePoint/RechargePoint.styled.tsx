import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
`

export const Title = styled.div`
  margin: 25px 0;
  font-weight: 500;
  font-size: 1.1em;
`

export const ButtonWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 10px;
  margin-bottom: 20px;
`

export const Button = styled.button<{ $active: boolean; $theme: number }>`
  background-color: ${props =>
    props.$active
      ? colors.blue01
      : props.$theme
      ? colors.gray02
      : colors.black02};
  color: ${props =>
    props.$active ? '#fff' : props.$theme ? '#000' : colors.gray04};
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  font-weight: 500;
`

export const Input = styled.input<{ $theme: number }>`
  height: 33px;
  border-radius: 6px;
  border: ${props => (props.$theme ? '1px solid #cacfd9' : 'none')};
  text-align: end;
  padding: 10px 15px;
  font-size: 0.9em;
  background-color: ${props => (props.$theme ? '#fff' : colors.black02)};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const Label = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  color: ${colors.gray04};
  font-size: 0.8em;
  font-weight: 500;
`
