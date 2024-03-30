import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-right: 20px;
`
export const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0.6em;
  color: #fff;
  background-color: ${colors.orange01};
  padding: 3px 4px;
  border-radius: 4px;
`

export const Image = styled.img`
  width: 179px;
  height: 125px;
  border-radius: 10px;
`

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 13px;
  padding: 0 2px;

  h3 {
    font-size: 0.9em;
    font-weight: 500;
    width: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  span {
    color: ${colors.gray04};
    font-size: 0.8em;
  }
`

export const Amount = styled.h3`
  padding: 0 2px;
  margin-top: 4px;
  font-size: 0.9em;
  font-weight: 500;
`
