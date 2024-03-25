import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 11%;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    border: 2px solid ${colors.gray04};
  }
`
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const Name = styled.div`
  color: #fff;
  font-size: 1.1em;
  font-weight: 500;
`

export const Email = styled.div`
  color: #fff;
  margin-top: 4px;
  font-size: 0.9em;
`
