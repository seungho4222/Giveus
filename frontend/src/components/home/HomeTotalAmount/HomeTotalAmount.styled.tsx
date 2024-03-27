import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  margin: 30px auto 0;
  background-color: #f6f7ff;
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

export const Desc = styled.div`
  color: ${colors.gray05};
  font-weight: 500;
  font-size: 0.7em;
  margin-top: 13px;
`
