import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  column-gap: 2%;
  padding: 4px 0;
`

export const Button = styled.button`
  display: flex;
  border: 1px solid ${colors.blue01};
  border-radius: 20px;
  padding-inline: 1em;
  padding-block: 0.2em;
  font-size: 0.9em;
  color: ${colors.blue01};
  margin-bottom: 1em;
  white-space: nowrap;
`

export const Icon = styled.img`
  display: flex;
  margin: auto;
  width: 8px;
  height: 8px;
  margin-left: 0.5em;
`
