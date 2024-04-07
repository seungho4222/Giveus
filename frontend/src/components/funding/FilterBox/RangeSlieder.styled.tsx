import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`

export const Track = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  user-select: none;
  background: #fff;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.6);
  border-radius: 2px;
`

export const Tick = styled.div<{ $percentage: number }>`
  position: absolute;
  top: 5px;
  left: ${props => `${props.$percentage}%`};
`

export const TickLabel = styled.div`
  position: absolute;
  font-size: 0.6rem;
  color: ${colors.gray04};
  top: 100%;
  transform: translate(-50%, 1.2rem);
  white-space: nowrap;
`

export const Segment = styled.div<{
  $index: number
  $left: number
  $width: number
}>`
  position: absolute;
  background: ${props =>
    props.$index === 0
      ? colors.gray03
      : props.$index === 1
      ? colors.blue01
      : colors.gray03};
  left: ${props => `${props.$left}%`};
  height: 100%;
  width: ${props => `${props.$width}%`};
`

export const Handle = styled.button<{ $left: number; $active: boolean }>`
  position: absolute;
  left: ${props => `${props.$left}%`};
  z-index: ${props => (props.$active ? 1 : 0)};
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  height: 1.5em;
  border: ${props => (props.$active ? '2px' : '1px')} solid ${colors.blue01};
  border-radius: 4px;
  font-size: 0.7rem;
  white-space: nowrap;
  font-weight: ${props => (props.$active ? 'bold' : 'normal')};
  transform: ${props =>
    props.$active
      ? 'translate(-50%, -50%) scale(1.3)'
      : 'translate(-50%, -40%) scale(0.9)'};
`

export const Tag = styled.div`
  position: absolute;
  font-size: 1.2em;
  margin-bottom: 50px;
  color: ${colors.blue01};
`
