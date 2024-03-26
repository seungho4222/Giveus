import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div``

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
  padding: 8px;
  border-bottom: 1px solid ${colors.gray03};
  background-color: rgba(67, 130, 255, 0.7);
  color: white;
`

export const Td = styled.td`
  padding: 12px 8px;
  text-align: center;
  border-bottom: 1px solid ${colors.gray03};
  cursor: pointer;
`

export const PageBox = styled.div`
  position: absolute;
  bottom: 8px;
  width: 96%;
  display: flex;
  justify-content: center;
  margin-block: 10px;
`

export const PageButton = styled.button``

export const PageText = styled.div`
  margin-inline: 20px;
`
