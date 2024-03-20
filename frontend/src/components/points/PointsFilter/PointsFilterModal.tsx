import ResetButton from '@common/ResetButton'
import ResponsiveModal from '@common/ResponsiveModal'
import LargeButton from '@common/LargeButton'
import * as p from '@components/points/PointsFilter/PointsFilterModal.styled'
import { PointsFilterModalType } from '@/types/mypageType'
import { useState } from 'react'

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

  const [values, setValues] = useState({
    startDate,
    endDate,
    type,
  })

  const changeType = (v: string) => {
    setValues({ ...values, type: v })
  }

  // 초기화
  const onClickReset = () => {
    setValues({ type, startDate, endDate })
  }

  // 확인
  const onClickConfirm = () => {
    setStartDate(values.startDate)
    setEndDate(values.endDate)
    setType(values.type)
    setValue(false)
  }

  return (
    <ResponsiveModal name="필터" onClose={() => setValue(false)}>
      <p.Container>
        <p.Title>조회 기간</p.Title>
        <p.DateWrap>
          <p.SelectDate
            type="date"
            value={values.startDate}
            onChange={e => setValues({ ...values, startDate: e.target.value })}
          />
          <div>-</div>
          <p.SelectDate
            type="date"
            value={values.endDate}
            onChange={e => setValues({ ...values, endDate: e.target.value })}
          />
        </p.DateWrap>
        <p.Title>포인트 사용 유형</p.Title>
        <p.TypeWrap>
          <p.TypeItem
            $active={values.type === '전체'}
            onClick={() => changeType('전체')}
          >
            전체
          </p.TypeItem>
          <p.TypeItem
            $active={values.type === '충전만'}
            onClick={() => changeType('충전만')}
          >
            충전만
          </p.TypeItem>
          <p.TypeItem
            $active={values.type === '사용만'}
            onClick={() => changeType('사용만')}
          >
            사용만
          </p.TypeItem>
        </p.TypeWrap>
        <p.ButtonWrap>
          <ResetButton text="초기화" onClick={onClickReset} />
          <LargeButton text="확인" onClick={onClickConfirm} />
        </p.ButtonWrap>
      </p.Container>
    </ResponsiveModal>
  )
}

export default PointsFilterModal
