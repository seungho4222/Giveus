import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 24px auto;
`

export const Title = styled.div`
  font-weight: 500;
  margin-bottom: 12px;
`

export const DateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
`

export const TypeWrap = styled.div`
  display: flex;
  margin-bottom: 28px;
`

export const TypeItem = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.$active ? colors.blue01 : colors.gray04)};
  border: 1px solid ${props => (props.$active ? colors.blue01 : colors.gray04)};
  border-radius: 20px;
  height: 32px;
  padding: 0 13px;
  font-size: 0.8em;
  margin-right: 8px;
  cursor: pointer;
`

export const SelectDate = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 45%;
  border: 1px solid ${colors.gray04};
  border-radius: 20px;
  font-size: 0.8em;
  font-weight: 500;
`

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
