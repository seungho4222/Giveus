import { Label } from '@common/input/Input.styled'
import { Input, TextArea } from '@/common/input/Input'
import Button from '@/common/button/Button'
import { useState } from 'react'
import ImageUpload from '@/common/imageUpload/imageUpload'
import {
  StyledFundingRegisterPage,
  StyledBirthContainer,
  StyledInputContainer,
} from './FundingRegister.styled'
import calculateAge from '@/utils/calculateAge'
// import { firstFunding } from '@/apis/user/funding'

const FundingRegister = () => {
  const [registrationData, setRegistrationData] = useState({
    phone: '',
    targetAmount: 0,
    startDate: '',
    endDate: '',
    //
    issueNumber: '',
    registrationNumber: '',
    patientName: '',
    birth: '',
    gender: '',
    diseaseName: '',
    diseaseCode: '',
    diagnosisDate: '',
    opinion: '',
    //
    title: '',
  })

  const handlePhoneChange = (value: string) => {
    setRegistrationData(prevData => ({ ...prevData, phone: value }))
  }

  const handleTargetChange = (value: string) => {
    setRegistrationData(prevData => ({
      ...prevData,
      targetAmount: parseInt(value),
    }))
  }

  const handleStartChange = (value: string) => {
    setRegistrationData(prevData => ({ ...prevData, startDate: value }))
  }

  const handleEndChange = (value: string) => {
    setRegistrationData(prevData => ({ ...prevData, endDate: value }))
  }

  const handleIssueChange = (value: string) => {
    setRegistrationData(prevData => ({ ...prevData, issueNumber: value }))
  }

  const handleRegistrationChange = (value: string) => {
    setRegistrationData(prevData => ({
      ...prevData,
      registrationNumber: value,
    }))
  }

  const handleNameChange = (value: string) => {
    setRegistrationData(prevData => ({ ...prevData, patientName: value }))
  }

  const handleBirthChange = (value: string) => {
    setRegistrationData(prevData => ({ ...prevData, birth: value }))
  }

  const handleGenderChange = (value: string) => {
    setRegistrationData(prevData => ({ ...prevData, gender: value }))
    if (value.length > 1) {
      alert('한 글자만 입력해주세요')
      
    }
  }

  const handleDiseaseNameChange = (value: string) => {
    setRegistrationData(prevData => ({ ...prevData, diseaseName: value }))
  }

  const handleDiseaseCodeChange = (value: string) => {
    setRegistrationData(prevData => ({ ...prevData, diseaseCode: value }))
  }

  const handleDiagnosisDateChange = (value: string) => {
    setRegistrationData(prevData => ({ ...prevData, diagnosisDate: value }))
  }

  const handleOpinionChange = (value: string) => {
    setRegistrationData(prevData => ({ ...prevData, opinion: value }))
  }

  const onRegister = async () => {
    const item =
      registrationData.gender === ('1' || '3')
        ? { titleGender: '(남)', gender: 'M' }
        : { titleGender: '(여)', gender: 'F' }

    // useState는 바로 처리 안되니까, 새로 찍은 데이터는 바로 보내주기
    const funding = {
      ...registrationData,
      title: `${registrationData.diseaseName} ${calculateAge(registrationData.birth, registrationData.gender)}세${item.titleGender} 펀딩`,
      gender: item.gender,
    }
    console.log(funding)

    try {
      // const response = await firstFunding(funding)
      // console.log('1차 등록 성공', response)
    } catch (error) {
      console.log('1차 등록 실패', error);
    }
  }

  return (
    <StyledFundingRegisterPage>
      <h1>펀딩 등록</h1>
      <StyledInputContainer>
        <Label htmlFor="phone">보호자 휴대폰 번호</Label>
        <Input
          placeholder={'휴대폰 번호 입력'}
          value={registrationData.phone}
          id={'phone'}
          onInputChange={handlePhoneChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Label htmlFor="target">펀딩 목표 금액</Label>
        <Input
          placeholder={'목표 금액 입력'}
          value={registrationData.targetAmount}
          id={'target'}
          onInputChange={handleTargetChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Label htmlFor="start">펀딩 시작일</Label>
        <Input
          placeholder={'펀딩 시작일 입력'}
          value={registrationData.startDate}
          id={'start'}
          onInputChange={handleStartChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Label htmlFor="end">펀딩 종료일</Label>
        <Input
          placeholder={'펀딩 종료일 입력'}
          value={registrationData.endDate}
          id={'end'}
          onInputChange={handleEndChange}
        />
      </StyledInputContainer>

      <ImageUpload />

      <StyledInputContainer>
        <Label htmlFor="issue-number">발행 번호</Label>
        <Input
          placeholder={'발행 번호 입력'}
          value={registrationData.issueNumber}
          id={'issue-number'}
          onInputChange={handleIssueChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Label htmlFor="registration">등록 번호(환자번호)</Label>
        <Input
          placeholder={'등록 번호 입력'}
          value={registrationData.registrationNumber}
          id={'registration'}
          onInputChange={handleRegistrationChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Label htmlFor="name">환자 성명</Label>
        <Input
          placeholder={'환자 성명 입력'}
          value={registrationData.patientName}
          id={'name'}
          onInputChange={handleNameChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Label htmlFor="birth">환자 주민등록번호</Label>
        <StyledBirthContainer>
          <Input
            width="140px"
            placeholder={'생년월일 6자리'}
            value={registrationData.birth}
            id={'birth'}
            onInputChange={handleBirthChange}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            -
          </div>
          <Input
            width="30px"
            placeholder={'1'}
            value={ registrationData.gender.length === 1 ? registrationData.gender : '' }
            id={'gender'}
            onInputChange={handleGenderChange}
          />
          <span style={{ marginTop: '10px', fontSize: '32px' }}>******</span>
        </StyledBirthContainer>
      </StyledInputContainer>

      <StyledInputContainer>
        <Label htmlFor="disease-name">질병명</Label>
        <Input
          placeholder={'질병명 입력'}
          value={registrationData.diseaseName}
          id={'disease-name'}
          onInputChange={handleDiseaseNameChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Label htmlFor="disease-code">병명 코드</Label>
        <Input
          placeholder={'병명 코드 입력'}
          value={registrationData.diseaseCode}
          id={'disease-code'}
          onInputChange={handleDiseaseCodeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Label htmlFor="diagnosis-date">진단일</Label>
        <Input
          placeholder={'진단일 입력'}
          value={registrationData.diagnosisDate}
          id={'diagnosis-date'}
          onInputChange={handleDiagnosisDateChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Label htmlFor="opinion">치료 내용/향후 치료에 대한 소견</Label>
        <TextArea
          height="300px"
          placeholder={'치료 내용 입력'}
          value={registrationData.opinion}
          id={'opinion'}
          onInputChange={handleOpinionChange}
        />
      </StyledInputContainer>
      <Button
        $backgroundColor={'#4382FF'}
        width={'300px'}
        height={'50px'}
        $borderRadius={'10px'}
        $children={'입력 완료'}
        onButtonClick={onRegister}
      />
    </StyledFundingRegisterPage>
  )
}

export default FundingRegister
