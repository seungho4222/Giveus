import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  padding-top: 40px;
  width: 65%;
`

export const Row = styled.div`
  display: flex;
  padding-block: 10px 15px;
  border-bottom: 1px solid ${colors.gray03};
`

export const Wrap = styled.div`
  display: flex;
  width: 50%;
`

export const Text = styled.div`
  width: 50%;
  white-space: nowrap;
`
