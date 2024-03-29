import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $theme: number }>`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-bottom: 2px solid
    ${props => (props.$theme ? colors.gray02 : colors.black02)};
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export const SectionTitle = styled.div`
  font-weight: 600;
`

export const Input = styled.input<{ $theme: number }>`
  margin-block: 1em;
  border: none;
  padding: 11px;
  border-bottom: ${props =>
    props.$theme ? '1px solid #cbcbcb' : '2px solid' + colors.gray05};
  font-size: 0.8em;
  font-weight: 500;
  width: 100%;
  background-color: ${props => (props.$theme ? '#fff' : colors.black01)};
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
  padding: 6px 0;
  width: 22%;
  font-size: 0.9em;
`

export const Desc = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  margin: 20px 0 4px;
`

export const SubDesc = styled.div`
  font-size: 0.8em;
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
