import * as p from '@components/points/PointsInfo/PointsInfo.styled'

const Index = () => {
  return (
    <p.Container>
      <p.Top>
        <img src="/icon/icon_coins.png" alt="" />
        <span>내 포인트</span>
      </p.Top>
      <p.PointBox>
        20,000 P <p.ChargeButton>충전</p.ChargeButton>
      </p.PointBox>
    </p.Container>
  )
}

export default Index
