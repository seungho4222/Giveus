import ResetButton from '@common/ResetButton'
import ResponsiveModal from '@common/ResponsiveModal'
import LargeButton from '@common/LargeButton'
import * as p from '@components/points/PointsFilter/PointsFilterModal.styled'
import { useState } from 'react'
import { BooleanStateType } from '@/types/commonType'
import { useRecoilState, useRecoilValue } from 'recoil'
import { DefaultMyPointListFilter, myPointListFilterState } from '@stores/point'
import { pointTypeList } from '@assets/data/pointTypeList'
import { themeState } from '@stores/theme'

const PointsFilterModal = (props: BooleanStateType) => {
  const { setValue } = props

  const theme = useRecoilValue(themeState)
  const [myPointListFilter, setMyPointListFilter] = useRecoilState(
    myPointListFilterState,
  )

  const [values, setValues] = useState(myPointListFilter)

  const changeType = (v: string) => {
    setValues({ ...values, type: v })
  }

  // 초기화
  const onClickReset = () => {
    setValues(DefaultMyPointListFilter)
  }

  // 확인
  const onClickConfirm = () => {
    setMyPointListFilter(values)
    setValue(false)
  }

  return (
    <ResponsiveModal name="필터" onClose={() => setValue(false)}>
      <p.Container>
        <p.Title>조회 기간</p.Title>
        <p.DateWrap>
          <p.SelectDate
            $theme={theme}
            type="date"
            value={values.startDate}
            onChange={e => setValues({ ...values, startDate: e.target.value })}
          />
          <div>-</div>
          <p.SelectDate
            $theme={theme}
            type="date"
            value={values.endDate}
            onChange={e => setValues({ ...values, endDate: e.target.value })}
          />
        </p.DateWrap>
        <p.Title>포인트 사용 유형</p.Title>
        <p.TypeWrap>
          {pointTypeList.map(item => (
            <p.TypeItem
              $active={values.type === item}
              onClick={() => changeType(item)}
              key={item}
            >
              {item}
            </p.TypeItem>
          ))}
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
