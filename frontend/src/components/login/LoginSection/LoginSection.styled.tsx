import styled from 'styled-components'
import { colors } from '@styles/theme'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`

export const Logo = styled.div`
  color: ${colors.blue01};
  font-weight: 900;
  font-size: 3em;
  text-align: center;
  margin-top: 50%;
`

export const Desc = styled.div`
  font-size: 1.4em;
  font-weight: 700;
  margin-top: 50px;
  line-height: 1.4;
  text-align: center;
`

export const SubDesc = styled.div`
  img {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: ${colors.gray01};
  font-weight: 600;
  font-size: 0.9em;
  margin-top: 17px;
`
