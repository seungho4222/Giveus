import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-bottom: 2px solid ${colors.gray02};
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export const SectionTitle = styled.div`
  font-weight: 600;
`

export const Input = styled.input`
  margin-block: 1em;
  border: none;
  padding: 11px;
  border-bottom: 1px solid #cbcbcb;
  font-size: 0.8em;
  font-weight: 500;
  width: 100%;
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  column-gap: 1em;
`

export const Button = styled.button<{ $active: boolean }>`
  border: 1px solid ${props => (props.$active ? colors.blue01 : colors.gray04)};
  color: ${props => (props.$active ? colors.blue01 : colors.gray04)};
  border-radius: 6px;
  padding: 0.5em 0;
  width: 22%;
`

export const Desc = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  margin-bottom: 0.3em;
`

export const SubDesc = styled.div`
  font-size: 0.7em;
  color: ${colors.gray04};
`

export const Orange = styled.span`
  color: ${colors.orange01};
`

export const SmallButton = styled.button`
  background-color: ${colors.blue01};
  color: #fff;
  border-radius: 6px;
  margin: 1.5em 0;
  padding: 0 0.5em;
  font-size: 0.8em;
  width: 23%;
  white-space: nowrap;
`

