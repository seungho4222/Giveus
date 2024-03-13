import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const DetailInfo = styled.div` // 상단
  padding: 1em;
  border-bottom: 2px solid ${colors.gray02};
`

export const Period = styled.div``



export const DetailDesc = styled.div` // 하단
  padding: 1em;
`