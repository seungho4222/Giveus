import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  margin-block: 30px;
`

export const Box = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 8px;
  border: 1px solid ${colors.gray03};
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
`

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`

export const Text = styled.div`
  margin-top: 20px;
`

export const Input = styled.input`
  width: 0;
  height: 0;
  margin: 0;
  overflow: hidden;
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
  margin-block: 10px;
`

export const PreviewImage = styled.img`
  width: 90%;
  height: 90%;
  margin: auto;
  border-radius: 8px;
  cursor: pointer;
`
