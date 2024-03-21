import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-bottom: 2px solid ${colors.gray02};
`

export const SectionTitle = styled.div`
  font-weight: 600;
  margin-bottom: 1em;
`

export const Note = styled.div`
  color: ${colors.gray04};
  font-size: 0.7em;
  margin-block: 1px;
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1em;
`

export const Button = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => (props.$active ? colors.blue01 : colors.gray03)};
  color: ${props => (props.$active ? colors.blue01 : colors.gray04)};
  border-radius: 6px;
  padding: 0.5em;
  width: 48%;
  font-size: 0.8em;
`

export const SubWrap = styled.div`
  display: flex;
  margin-block: 0.5em;
`

export const RadioInput = styled.input`
  margin-block: auto;
  cursor: pointer;
`

export const Img = styled.div`
  margin-inline: auto;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: pink;
  margin-block: 0.5em;
`

export const Name = styled.div`
  margin-inline: auto;
  margin-bottom: 0.5em;
`
