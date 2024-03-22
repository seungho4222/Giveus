import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 18px;
`

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 1.5em;
`

export const Icon = styled.img`
  width: 65px;
  height: 65px;
  margin: 24px 0;
`

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 0.9em;
  margin-top: 20px;
`

export const Line = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  height: 2px;
  margin-bottom: 13px;
`

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 47px;
  span {
    font-size: 0.8em;
    line-height: 1.4;
    color: ${colors.gray04};
  }
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`
