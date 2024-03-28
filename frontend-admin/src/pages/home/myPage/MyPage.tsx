import styled from 'styled-components'
import { colors } from '@/styles/theme'

import MyPageHeader from '@/components/wallet/walletHeader'

const StyledWalletContainer = styled.div`
  width: 592px;
  height: 536px;
  position: relative;
  display: flex;
  z-index: 0;
  background-color: ${colors.gray02};
  justify-content: center;
  align-items: center;
`

const StyledWalletHeader = styled.div`
  width: 592px;
  height: 124px;
  z-index: 5;
  position: absolute;
  background-color: ${colors.blue01};
  display: flex;
  flex-direction: column;
  color: white;
`

const StyledAddress = styled.div`
  width: 228px;
  height: 33px;
  background-color: #fff;
`

const MyPage = () => {
  return (
    <>
      <StyledWalletContainer>
        <StyledWalletHeader>
          싸피 병원 Wallet
          <StyledAddress>
            {/* <Img src="/icon/icon_copy_blue.png" /> */}
          </StyledAddress>
        </StyledWalletHeader>
      </StyledWalletContainer>
      MyPage
    </>
  )
}

export default MyPage
