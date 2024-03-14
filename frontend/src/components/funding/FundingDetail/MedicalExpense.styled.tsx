import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
`

export const ExpenseFalse = styled.div`
  color: ${colors.gray04};
`

export const ExpenseTrue = styled.div``

export const TotalExpense = styled.div`
  font-size: 1.2em;
  font-weight: 600;
`

export const Card = styled.div`
  display: flex;
  padding: 1em;
  background-color: ${colors.gray02};
  border-radius: 12px;
  margin-block: 1em;
`

export const Icon = styled.img`
  height: 1.5em;
  display: flex;
  align-self: center;
  margin-right: 1em;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 5px;
`

export const Category = styled.div`
  font-size: 0.8em;
  font-weight: 600;
`

export const SubWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Content = styled.div`
  font-size: 0.8em;
  color: ${colors.gray04};
`

export const Amount = styled.div`
  font-size: 0.8em;
  font-weight: 600;
`
