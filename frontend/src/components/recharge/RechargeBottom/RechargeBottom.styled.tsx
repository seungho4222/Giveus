import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto auto 18px auto;
`
export const Label = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 0.8em;

  input {
    width: 20px;
    height: 20px;
    margin-right: 9px;
    accent-color: ${colors.blue01};
  }
`
