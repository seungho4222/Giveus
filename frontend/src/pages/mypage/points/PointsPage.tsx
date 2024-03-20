import PointsFilter from '@components/points/PointsFilter'
import PointsInfo from '@components/points/PointsInfo'
import PointsList from '@components/points/PointsList'
import MypagePrevHeader from '@components/mypage/MypagePrevHeader'
import * as p from '@pages/mypage/points/PointsPage.styled'

const PointsPage = () => {
  return (
    <p.Container>
      <MypagePrevHeader title="포인트 관리" />
      <PointsInfo />
      <PointsFilter />
      <PointsList />
    </p.Container>
  )
}

export default PointsPage
