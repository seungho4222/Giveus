import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  margin-left: 5%;
  position: relative;
  overflow: hidden;
  padding-bottom: 40px;
`

export const Title = styled.h1`
  margin-top: 26px;
  padding-left: 4px;
  font-size: 1.7em;
  font-weight: 700;
  line-height: 1.4;
  b {
    color: ${colors.blue01};
  }
`

export const SubTitle = styled.h4`
  margin-top: 13px;
  padding-left: 4px;
  font-size: 0.8em;
  font-weight: 600;
  line-height: 1.4;
  color: ${colors.gray04};
`

export const Circle = styled.div`
  position: absolute;
  top: 20px;
  right: -7%;
  width: 218px;
  height: 218px;
  border-radius: 100%;
  background: linear-gradient(rgba(102, 163, 255, 0.1), #fff);
`

export const Airplane = styled.div`
  transform: translateX(-60px);
`
