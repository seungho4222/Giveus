import ResetButton from '@common/ResetButton'
import ResponsiveModal from '@common/ResponsiveModal'
import LargeButton from '@common/LargeButton'
import * as p from '@components/points/PointsFilter/PointsFilterModal.styled'
import { useState } from 'react'
import { BooleanStateType } from '@/types/commonType'
import { useRecoilState } from 'recoil'
import { DefaultMyDonateListFilter, myDonateListFilterState } from '@/stores/donate'
import { donateTypeList } from '@/assets/data/donateTypeList'

const DonateFilterModal = (props: BooleanStateType) => {
  const { setValue } = props

  const [myDonateListFilter, setMyDonateListFilter] = useRecoilState(
    myDonateListFilterState,
  )

  const [values, setValues] = useState(myDonateListFilter)

  const changeType = (v: string) => {
    setValues({ ...values, status: v })
  }

  // 초기화
  const onClickReset = () => {
    setValues(DefaultMyDonateListFilter)
  }

  // 확인
  const onClickConfirm = () => {
    setMyDonateListFilter(values)
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
        <p.Title>펀딩 상태</p.Title>
        <p.TypeWrap>
          {donateTypeList.map(item => (
            <p.TypeItem
              $active={values.status === item}
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

export default DonateFilterModal
