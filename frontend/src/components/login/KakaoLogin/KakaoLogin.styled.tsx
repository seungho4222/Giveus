import styled from 'styled-components'
import { colors } from '@styles/theme'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.yellow01};
  color: #3d1d1c;
  font-weight: 700;
  font-size: 0.9em;
  height: 49px;
  border-radius: 5px;

  img {
    width: 17px;
    height: 16px;
    margin-right: 9px;
  }
`
