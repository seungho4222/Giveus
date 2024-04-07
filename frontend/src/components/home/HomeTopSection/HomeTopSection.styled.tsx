import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  margin-left: 5%;
  position: relative;
  overflow: hidden;
  padding-bottom: 40px;
`

export const Title = styled.h1`
  margin-top: 26px;
  padding-left: 4px;
  font-size: 1.8em;
  font-weight: 700;
  line-height: 1.4;
  b {
    color: ${colors.blue01};
  }
`

export const SubTitle = styled.h4`
  margin-top: 13px;
  padding-left: 4px;
  font-size: 1em;
  font-weight: 600;
  line-height: 1.4;
  color: ${colors.gray04};
  z-index: 2;
`

export const Circle = styled.div<{ $theme: number }>`
  position: absolute;
  top: 20px;
  right: -13%;
  width: 218px;
  height: 218px;
  border-radius: 100%;
  background: ${props =>
    props.$theme === 1
      ? 'linear-gradient(rgba(102, 163, 255, 0.1), #fff)'
      : `linear-gradient(rgba(102, 163, 255, 0.1), ${colors.black01})`};
`

export const Airplane = styled.div`
  transform: translateX(-70px);
`
