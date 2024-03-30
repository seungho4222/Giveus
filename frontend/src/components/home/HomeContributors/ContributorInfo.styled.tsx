import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding-bottom: 20px;
`

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 20px;
`
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1em;
  gap: 4px;
  font-weight: 500;
  b {
    color: ${colors.blue01};
  }
`

export const DateWrap = styled.div<{ $theme: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-left: auto;
  font-size: 0.8em;
  gap: 4px;
  color: ${props => (props.$theme ? colors.gray05 : colors.gray03)};
`
