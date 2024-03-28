import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 69px;
`

export const Input = styled.input<{ $theme: number }>`
  width: 90%;
  background-color: ${props =>
    props.$theme === 1 ? colors.gray02 : colors.black02};
  border: none;
  padding: 11px 20px;
  border-radius: 20px;
  height: 36px;
  font-size: 0.9em;

  /* 기본 x button 제거 */
  /* IE의 경우 */
  &::-ms-clear,
  &::-ms-reveal {
    display: none;
  }
  /* 크롬의 경우 */
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`

export const Xbutton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`
