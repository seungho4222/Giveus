import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
`

export const InfoWrap = styled.div<{ $flag: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin-left: 8px;
  font-weight: 600;

  span {
    color: ${props => (props.$flag ? colors.orange01 : colors.blue01)};
    font-size: 0.9em;
    font-weight: 600;
  }
`
export const Name = styled.div`
  margin-top: 4px;
  width: 160px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1em;
`

export const Amount = styled.div<{ $theme: number }>`
  margin-top: auto;
  font-size: 0.9em;
  color: ${props => (props.$theme ? colors.gray05 : colors.gray04)};
`

export const Percent = styled.div<{ $flag: boolean }>`
  display: flex;
  margin: auto 0;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => (props.$flag ? colors.orange01 : colors.blue01)};
  border-radius: 100%;
  margin-left: auto;
  font-size: 0.9em;
  color: ${props => (props.$flag ? colors.orange01 : colors.blue01)};
  font-weight: 700;
`
