import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 26px auto 0;
`

export const Title = styled.div`
  color: ${colors.gray04};
  font-weight: 500;
  font-size: 0.9em;
  padding-left: 4px;
  margin-bottom: 10px;
`
