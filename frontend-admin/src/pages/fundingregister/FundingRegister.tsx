import styled from 'styled-components'
import { Label } from '@common/input/Input.styled'
import { SimpleInput } from '@/common/input/Input'
import Button from '@/common/button/Button'
import { useState } from 'react'

const StyledFundingRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`
const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const FundingRegister = () => {
    const [registrationData, setRegistrationData] = useState<object>({
        fundingNo: 0,
        issueNumber: '',
        registrationNumber: '',
        patientName: '',
        status: '',
        birth: '', 
        gender: '',
        diseaseName: '',
        diseaseCode: '',
        diagnosisDate: '',
        opinion: '',
        title: '',
        startDate: '',
        endDate: '',
        totalAmount: 0,
        targetAmount: 0,
        createdAt:'',
        phone:'',
    })
    
    const handlePhoneChange = (value:string) => {
        setRegistrationData((prevData) => ({...prevData, phone: value}))
    }

  return (
    <>
      <h1>펀딩 등록</h1>
      <StyledFundingRegisterPage>
        <StyledInputContainer>
          <Label htmlFor="phone">보호자 휴대폰 번호</Label>
          <SimpleInput
            placeholder={'휴대폰 번호 입력'}
            value={''}
            id={'phone'}
              onInputChange={handlePhoneChange}
          />
        </StyledInputContainer>
      </StyledFundingRegisterPage>
    </>
  )
}

export default FundingRegister
