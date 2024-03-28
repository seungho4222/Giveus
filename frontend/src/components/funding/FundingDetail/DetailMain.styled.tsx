import { colors, sizes } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

// ---------------------------- 상단 ----------------------------
export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;
  border-bottom: 2px solid ${colors.gray02};
`

export const Period = styled.div`
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 1em;
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TotalAmount = styled.div`
  font-size: 1.3em;
  font-weight: 700;
`

export const Dday = styled.div`
  color: ${colors.blue01};
  font-weight: 700;
`

export const Progress = styled.div<{ $theme: number }>`
  position: relative;
  background-color: ${props => (props.$theme ? colors.gray02 : colors.black02)};
  border-radius: 20px;
  width: 100%;
  height: 8px;
  margin-block: 0.5em;
`

export const ProgressStatus = styled.div<{ $width: string }>`
  position: absolute;
  background-color: ${colors.blue01};
  border-radius: 20px;
  height: 8px;
  width: ${props => props.$width};
`

export const Percent = styled.div`
  color: ${colors.orange01};
  font-size: 1em;
  font-weight: 500;
`

export const TargetAmount = styled.div<{ $theme: number }>`
  color: ${props => (props.$theme ? colors.gray05 : colors.gray04)};
  font-size: 0.9em;
`

export const Note = styled.div`
  color: ${colors.gray04};
  font-size: 0.9em;
  margin: 20px 0;
`

// ---------------------------- 하단 ----------------------------
export const DetailDesc = styled.div`
  width: 90%;
  margin: 20px auto 80px;
`

export const Button = styled.div`
  width: 100%;
  min-width: ${sizes.minWidth};
  max-width: ${sizes.maxWidth};
  position: fixed;
  bottom: 0;
  padding: 1em;
  @media only screen and (min-width: 430px) {
    width: 430px;
  }
  @media only screen and (min-width: 600px) {
    width: 375px;
  }
`
