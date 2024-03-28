import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $theme: number }>`
  display: flex;
  flex-direction: column;
  width: 88%;
  margin: 30px auto 0;
  background-color: ${props => (props.$theme ? '#f6f7ff' : colors.black02)};
  border-radius: 10px;
  padding: 26px 20px;
  position: relative;

  img {
    position: absolute;
    bottom: 26px;
    right: 16px;
    width: 39px;
    height: 35px;
  }
`

export const Title = styled.div`
  font-weight: 700;
  color: #5d68f8;
  line-height: 1.2;
`

export const Desc = styled.div<{ $theme: number }>`
  color: ${props => (props.$theme ? colors.gray05 : colors.gray03)};
  font-weight: 500;
  font-size: 0.7em;
  margin-top: 13px;
`
