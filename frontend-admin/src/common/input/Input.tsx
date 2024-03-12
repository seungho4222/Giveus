import { useState } from 'react'
import { StyledInput } from './Input.styled'

type InputProps = {
    id?: string
    width?: string
    height?: string
    placeholder: string
    value: string
    fontSize?: string
    onInputChange?: (value: string) => void
    onEnterKeyUp?: (value: string) => void
  }


const SimpleInput = (props: InputProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleSimpleInputChange = (e: any) => {
    setInputValue(e.target.value)
    if (props.onInputChange) {
      props.onInputChange(e.target.value)
    }
  }

  const handleEnterKeyPress = (e: any) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      if (props.onEnterKeyUp) {
        props.onEnterKeyUp(inputValue)
        setInputValue('')
      }
      setInputValue('')
    }
  }

  return (
    <StyledInput
      id={props.id}
      width={props.width}
      height={props.height}
      value={inputValue}
      placeholder={props.placeholder}
      onChange={handleSimpleInputChange}
      onKeyUp={handleEnterKeyPress}
    ></StyledInput>
  )
}


export { SimpleInput }
