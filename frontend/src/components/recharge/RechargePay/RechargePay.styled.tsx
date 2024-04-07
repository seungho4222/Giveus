import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 10px auto;
`
export const Title = styled.div`
  margin: 30px 0 17px 0;
  font-weight: 500;
  font-size: 1.1em;
`

export const Wrap = styled.div`
  display: flex;
`

export const Label = styled.label<{ $active: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${props => (props.$active ? colors.blue01 : '#CACFD9')};
  color: ${props => (props.$active ? colors.blue01 : '#CACFD9')};
  border-radius: 6px;
  margin-right: 12px;
  padding: 11px 8px;
  cursor: pointer;
`

export const RadioInut = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  width: 16px;
  height: 16px;
`

export const Logo = styled.img`
  height: 16px;
`
