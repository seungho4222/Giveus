import { myPointState } from '@stores/point'
import * as p from '@components/points/PointsInfo/PointsInfo.styled'
import { useNavigate } from 'react-router'
import { useRecoilValue } from 'recoil'
import { formatAmount } from '@utils/format'

const Index = () => {
  const myPoint = useRecoilValue(myPointState)
  const navigate = useNavigate()

  const goRechargePage = () => navigate('/mypage/recharge')

  return (
    <p.Container>
      <p.Top>
        <img src="/icon/icon_coins.png" alt="" />
        <span>내 포인트</span>
      </p.Top>
      <p.PointBox>
        {formatAmount(myPoint)} P
        <p.ChargeButton onClick={goRechargePage}>충전</p.ChargeButton>
      </p.PointBox>
    </p.Container>
  )
}

export default Index
