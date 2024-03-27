import { colors } from '@/styles/theme'
import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1% 3%;
  padding: 1% 2%;
  background-color: #fff;
  border-radius: 15px;
  height: 80%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    background: transparent;
    -webkit-appearance: none;
  }
`

export const Title = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  margin-block: 20px;
`

export const Wrap = styled.div`
  width: 400px;
  height: 300px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.blue01};
  color: #fff;
  height: 49px;
  border-radius: 5px;
  font-size: 1em;
  margin-block: 30px;
`
