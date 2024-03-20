import PointsFilter from '@components/points/PointsFilter'
import PointsInfo from '@components/points/PointsInfo'
import PointsList from '@components/points/PointsList'
import MypagePrevHeader from '@components/mypage/MypagePrevHeader'
import * as p from '@pages/mypage/points/PointsPage.styled'
import { useState } from 'react'
import PointsFilterModal from '@components/points/PointsFilter/PointsFilterModal'
import { getOneMonthAgoDate, getTodayDate } from '@utils/dateMethods'

const PointsPage = () => {
  const [open, setOpen] = useState(true)
  const [startDate, setStartDate] = useState(getOneMonthAgoDate())
  const [endDate, setEndDate] = useState(getTodayDate())
  const [type, setType] = useState('전체')

  return (
    <>
      <p.Container>
        <MypagePrevHeader title="포인트 관리" />
        <PointsInfo />
        <PointsFilter
          setOpen={setOpen}
          startDate={startDate}
          endDate={endDate}
          type={type}
        />
        <PointsList />
      </p.Container>
      {open && (
        <PointsFilterModal
          value={open}
          setValue={setOpen}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          type={type}
          setType={setType}
        />
      )}
    </>
  )
}

export default PointsPage
