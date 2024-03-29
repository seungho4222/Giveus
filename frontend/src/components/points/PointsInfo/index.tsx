import { myPointState } from '@stores/point'
import * as p from '@components/points/PointsInfo/PointsInfo.styled'
import { useNavigate } from 'react-router'
import { useRecoilValue } from 'recoil'
import { formatAmount } from '@utils/format'
import { themeState } from '@/stores/theme'

const Index = () => {
  const myPoint = useRecoilValue(myPointState)
  const theme = useRecoilValue(themeState)
  const navigate = useNavigate()

  const goRechargePage = () => navigate('/mypage/recharge')

  return (
    <p.Container $theme={theme}>
      <p.Top>
        <img src="/icon/icon_coins.png" alt="" />
        <span>내 포인트</span>
      </p.Top>
      <p.PointWrap $theme={theme}>
        <span>{formatAmount(myPoint)}P</span>
        <button onClick={goRechargePage}>충전</button>
      </p.PointWrap>
      <p.Desc $theme={theme}>
        * 충전한 포인트는 원화로 환전할 수 없습니다
      </p.Desc>
    </p.Container>
  )
}

export default Index
