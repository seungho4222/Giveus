import PointsFilter from '@components/points/PointsFilter'
import PointsInfo from '@components/points/PointsInfo'
import PointsList from '@components/points/PointsList'
import MypagePrevHeader from '@components/mypage/MypagePrevHeader'
import * as p from '@pages/mypage/points/PointsPage.styled'
import { useState } from 'react'
import PointsFilterModal from '@components/points/PointsFilter/PointsFilterModal'
import { useRecoilValue } from 'recoil'
import { themeState } from '@stores/theme'

const PointsPage = () => {
  const [open, setOpen] = useState(false)
  const theme = useRecoilValue(themeState)

  return (
    <>
      <p.Container>
        <MypagePrevHeader title="포인트 관리" url="/mypage" />
        <PointsInfo />
        <PointsFilter setOpen={setOpen} />
        <p.Line $theme={theme} />
        <PointsList />
      </p.Container>
      {open && <PointsFilterModal value={open} setValue={setOpen} />}
    </>
  )
}

export default PointsPage
