import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  padding: 20px 0;
`

export const Profile = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 17px;
  border-radius: 100%;
`

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.div`
  font-weight: 600;
  font-size: 1.1em;
  margin-bottom: 8px;
`

export const NickName = styled.div`
  font-weight: 500;
  font-size: 0.9em;
  color: ${colors.gray05};
`
