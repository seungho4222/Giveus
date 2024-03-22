import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 10px auto;
`
export const Title = styled.div`
  margin: 30px 0 10px 0;
  font-weight: 500;
  font-size: 1.1em;
`

export const Desc = styled.div`
  color: ${colors.gray04};
  font-size: 0.8em;
  margin-bottom: 5px;
`
