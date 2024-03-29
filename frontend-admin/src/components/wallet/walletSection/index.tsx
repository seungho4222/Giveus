import * as ws from '@components/wallet/walletSection/WalletSection.styled'

const index = () => {
  return (
    <>
      <ws.Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', gap: '10px'}}>
            <ws.Img src="/icon/icon_coin_Bitcoin.png" />
            Bitcoin
          </div>
          0 BTC
        </div>
        <ws.Img src="/icon/icon_coin_Ethereum.png" />
        <ws.Img src="/icon/icon_coin_XRP.png" />
        <ws.Img src="/icon/icon_coin_Dogecoin.png" />
      </ws.Container>
    </>
  )
}

export default index
