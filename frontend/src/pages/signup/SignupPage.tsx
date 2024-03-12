import SignupNameSection from '@components/signup/SignupNameSection'
import SignupHeader from '@components/signup/SignupHeader'
import * as s from '@pages/signup/SignupPage.styled'
import { useState } from 'react'

const SignupPage = () => {
  const [name, setName] = useState('')

  return (
    <s.Container>
      <SignupHeader />
      <s.Wrap>
        <SignupNameSection value={name} setValue={setName} />
      </s.Wrap>
    </s.Container>
  )
}

export default SignupPage
