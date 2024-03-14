import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

// ---------------------------- 상단 ----------------------------
export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-bottom: 2px solid ${colors.gray02};
`

export const Period = styled.div`
  font-size: 0.9em;
  font-weight: 500;
  margin-bottom: 1em;
`

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TotalAmount = styled.div`
  font-size: 1.2em;
  font-weight: 700;
`

export const Dday = styled.div`
  color: ${colors.blue01};
  font-weight: 700;
`

export const Progress = styled.div`
  position: relative;
  background-color: ${colors.gray02};
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
  width: ${props => (props.$width)};
`

export const Percent = styled.div`
  color: ${colors.orange01};
  font-size: 0.9em;
`

export const TargetAmount = styled.div`
  color: ${colors.gray05};
  font-size: 0.8em;

`

export const Note = styled.div`
  color: ${colors.gray04};
  font-size: 0.8em;
  margin-top: 1em;
`

// ---------------------------- 하단 ----------------------------
export const DetailDesc = styled.div`
  padding: 1em;
  margin-bottom: 80px; // BottomButton 크기 80px
`
