import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $selected: boolean }>`
  width: 70px;
  background-color: ${props =>
    props.$selected ? colors.blue01 : colors.black01};
  cursor: pointer;
  user-select: none;
  border-radius: 24px;
  padding: 2px;
  height: 32px;
  position: relative;
  border: 2px solid ${colors.blue01};
`

export const Wrap = styled.div<{ $selected: boolean }>`
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  top: 3px;
  border-radius: 100%;
  min-width: unset;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: ${props => (props.$selected ? '40px' : '4px')};
  background-color: ${props => (props.$selected ? '#fff' : colors.blue01)};
  transition: all 0.3s ease;
`
