import React from 'react'
import styled from 'styled-components'

import AdminLogo from '@assets/icons/adminLogo.svg?react'
import DashBoard from '@assets/icons/headerDashboardIcon.svg?react'
import Profile from '@assets/icons/headerProfileIcon.svg?react'
import SignUp from '@assets/icons/headerSignUpIcon.svg?react'
import SignIn from '@assets/icons/headerSignInIcon.svg?react'
import Button from '@/common/button/Button'

import { StyledHeaderContainer, StyledHeaderLeft, StyledHeaderMiddle } from './Header.styled'


const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderLeft>
        <AdminLogo />
        <div>GIVEUS HOSPITAL</div>
      </StyledHeaderLeft>

      <StyledHeaderMiddle>
        <DashBoard />
        <Profile />
        <SignUp />
        <SignIn />
      </StyledHeaderMiddle>

      <Button
        $backgroundColor={'black'}
        $fontColor="white"
        $fontSize="10px"
        width={'150px'}
        height={'32px'}
        $borderRadius={'35px'}
        $children={'GIVE US'}
      ></Button>
    </StyledHeaderContainer>
  )
}

export default Header
