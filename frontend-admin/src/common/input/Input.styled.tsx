import styled from "styled-components"


type InputProps = {
    id: string
    type?: string
    width?: string
    height?: string
    placeholder: string
    value: string
    fontSize?: string
    onInputChange?: (value: string) => void
    onEnterKeyUp?: (value: string) => void
  }

// const StyledInputContainer = styled.div<InputProps>`
//   position: relative;
//   width: ${props => (props.width ? props.width : `300px`)};
// `

const StyledInput = styled.input<InputProps>`
  border-radius: 10px;
  border: 1px solid #cacfd9;
  background: #fff;
  /* box-shadow: 0px 10px 40px 0px rgba(174, 174, 174, 0.2); */
  width: ${props => (props.width ? props.width : `300px`)};
  height: ${props => (props.height ? props.height : `50px`)};
  font-size: ${props => (props.fontSize ? props.fontSize : `12px`)};
  padding: 10px;

  &:focus {
    border-color: #4382FF;
    border-width: 2px;
    outline: none;
  }
`


const Label = styled.label`
  color: #b0a9a9;
  font-family: 'Pretendard';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`


export { StyledInput, Label }