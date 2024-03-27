import * as r from '@/components/fundingReg/RegNumber/RegNumber.styled'
import { RegInputType } from '@/types/fundingType'
import { useState } from 'react'

const index = (props: RegInputType) => {
  const { id, label, placeholder, setValue } = props
  const [birth, setBirth] = useState('')
  const [gender, setGender] = useState('')

  const handleBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setBirth(e.target.value)
    let strBirth: any = e.target.value.split('')
    strBirth.splice(4, 0, '-')
    strBirth.splice(2, 0, '-')
    if (strBirth[0] < 3) {
      strBirth.unshift('20')
    } else strBirth.unshift('19')
    strBirth = strBirth.join('')
    setValue(prevData => ({
      ...prevData,
      birth: strBirth,
    }))
  }

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setGender(e.target.value)
    let strGender = 'F'
    if (e.target.value === '1' || e.target.value === '3') strGender = 'M'
    setValue(prevData => ({
      ...prevData,
      gender: strGender,
    }))
  }

  return (
    <r.Container>
      <r.Label htmlFor={id}>{label}</r.Label>
      <r.Wrap>
        <r.Input
          id={id}
          placeholder={placeholder}
          value={birth}
          onChange={handleBirthChange}
          maxLength={6}
        />
        <r.Minus> - </r.Minus>
        <r.SubWrap>
          <r.GenderInput
            value={gender}
            onChange={handleGenderChange}
            maxLength={1}
          />
          <r.Star>******</r.Star>
        </r.SubWrap>
      </r.Wrap>
    </r.Container>
  )
}

export default index
