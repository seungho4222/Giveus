import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40vh;
  border-bottom: 2px solid ${colors.gray02};
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`

export const Title = styled.div`
  font-size: 1.1em;
  font-weight: 700;
`

export const Desc = styled.div`
  color: ${colors.gray05};
  margin-top: 1em;
`