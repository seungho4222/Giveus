import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 18px;
  color: #fff;
  background-color: ${colors.green01};
  font-weight: 600;
  font-size: 0.9em;
  height: 49px;
  border-radius: 5px;

  img {
    width: 19px;
    height: 19px;
    margin-right: 9px;
  }
`
