import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 0.9em;
  font-weight: 600;
  margin-block: 10px;
  padding: 0 5%;
`

export const ScrollArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  overflow-y: scroll;
  height: calc(100vh - 180px);
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
    width: 0; /* Remove scrollbar space */
    height: 0;
    background: transparent; /* Optional: just make scrollbar invisible */
    -webkit-appearance: none;
  }
`

export const Empty = styled.div`
  display: flex;
  padding: 0 5%;
  color: ${colors.gray04};
`
