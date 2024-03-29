import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $theme: number }>`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-bottom: 2px solid
    ${props => (props.$theme ? colors.gray02 : colors.black02)};
`

export const SectionTitle = styled.div`
  font-weight: 600;
  margin-bottom: 1em;
`

export const Note = styled.div`
  color: ${colors.gray04};
  font-size: 0.7em;
  margin-block: 2px;
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
  align-items: center;
  margin-top: 4px;
`

export const RadioInput = styled.input`
  margin-block: auto;
  cursor: pointer;
  margin-right: 4px;
`

export const Img = styled.img`
  margin: 20px auto;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: pink;
`

export const Name = styled.div`
  margin-inline: auto;
  margin-bottom: 0.5em;
  font-weight: 500;
`
