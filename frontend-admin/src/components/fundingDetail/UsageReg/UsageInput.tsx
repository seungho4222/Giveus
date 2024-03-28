import * as r from '@/components/fundingReg/RegInput/RegInput.styled'
import { UsageInputType } from '@/types/fundingType'
import { useState } from 'react'

const index = (props: UsageInputType) => {
  const { id, label, placeholder, setValue } = props
  const [newValue, setNewValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewValue(e.target.value)
    setValue(prevData => ({
      ...prevData,
      [id]: e.target.value,
    }))
  }

  return (
    <r.Container>
      <r.Label htmlFor={id}>{label}</r.Label>
      <r.Input
        id={id}
        placeholder={placeholder}
        value={newValue}
        onChange={handleChange}
      />
    </r.Container>
  )
}

export default index
