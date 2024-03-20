import ResetButton from '@common/ResetButton'
import ResponsiveModal from '@common/ResponsiveModal'
import LargeButton from '@common/LargeButton'
import * as p from '@components/points/PointsFilter/PointsFilterModal.styled'
import { PointsFilterModalType } from '@/types/mypageType'

const PointsFilterModal = (props: PointsFilterModalType) => {
  const {
    value,
    setValue,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    type,
    setType,
  } = props

  const changeType = (v: string) => {
    setType(v)
  }

  return (
    <ResponsiveModal name="필터" onClose={() => setValue(false)}>
      <p.Container>
        <p.Title>조회 기간</p.Title>
        <p.DateWrap>
          <p.SelectDate
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
          <div>-</div>
          <p.SelectDate
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </p.DateWrap>
        <p.Title>포인트 사용 유형</p.Title>
        <p.TypeWrap>
          <p.TypeItem
            $active={type === '전체'}
            onClick={() => changeType('전체')}
          >
            전체
          </p.TypeItem>
          <p.TypeItem
            $active={type === '충전만'}
            onClick={() => changeType('충전만')}
          >
            충전만
          </p.TypeItem>
          <p.TypeItem
            $active={type === '사용만'}
            onClick={() => changeType('사용만')}
          >
            사용만
          </p.TypeItem>
        </p.TypeWrap>
        <p.ButtonWrap>
          <ResetButton text="초기화" onClick={() => console.log('초기화')} />
          <LargeButton text="확인" onClick={() => console.log('확인')} />
        </p.ButtonWrap>
      </p.Container>
    </ResponsiveModal>
  )
}

export default PointsFilterModal
