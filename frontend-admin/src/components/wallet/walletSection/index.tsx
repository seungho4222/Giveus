import React from 'react'
import * as ws from '@components/wallet/walletSection/WalletSection.styled'

const index = () => {
  return (
    <>
      <ws.Container>
        
        <ws.Img src='/icon/icon_coin_Bitcoin.png'/>
        <ws.Img src='/icon/icon_coin_Ethereum.png'/>
        <ws.Img src='/icon/icon_coin_XRP.png'/>
        <ws.Img src='/icon/icon_coin_Dogecoin.png'/>


      </ws.Container>
    </>
  )
}

export default index
