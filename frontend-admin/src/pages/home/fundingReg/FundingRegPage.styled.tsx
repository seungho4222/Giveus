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

export const BlueButton = styled.button`
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

export const OrangeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.orange01};
  color: #fff;
  height: 49px;
  border-radius: 5px;
  font-size: 1em;
  margin-block: 30px;
`






export const BirthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 20px 0px;
`

export const BirthWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`

export const BirthLabel = styled.label`
  margin-bottom: 5px;
  font-size: 0.8em;
`

export const BirthInput = styled.input`
  width: 190px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${colors.gray03};
`

export const BirthMinus = styled.div`
  margin: auto;
`

export const BirthSubWrap = styled.div`
  display: flex;
`

export const BirthGenderInput = styled.input`
  width: 40px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid ${colors.gray03};
`

export const BirthStar = styled.div`
  margin: 8px 0 0 5px;
  font-size: 3em;
  color: ${colors.gray04};
`
