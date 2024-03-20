import LargeButton from '@/common/LargeButton'
import ResetButton from '@/common/ResetButton'
import { AgeRangeType, FilterStatusType } from '@/types/fundingType'
import * as f from '@components/funding/FilterBox/FilterCondition.styled'
import { useState } from 'react'
import RangeSlieder from './RangeSlieder'

const FilterCondition = (props: FilterStatusType & AgeRangeType) => {
  const {
    filterStatus,
    setFilterStatus,
    setFilterOpen,
    ageRange,
    setAgeRange,
  } = props
  const [doing, setDoing] = useState<boolean>(filterStatus[0]) // 진행중
  const [done, setDone] = useState<boolean>(filterStatus[1]) // 진행완료
  const [values, setValues] = useState<ReadonlyArray<number>>(ageRange) // 나이 범위

  const onClickReset = () => {
    setDoing(false)
    setDone(false)
    setFilterStatus([doing, done, false])
    setValues([0, 100])
  }

  const onClickSubmit = () => {
    setFilterStatus([doing, done, values[0] !== 0 || values[1] !== 100])
    setFilterOpen && setFilterOpen(false)
    setAgeRange(values)
  }

  return (
    <>
      <f.Container>
        <f.Condition>펀딩 상태</f.Condition>
        <f.Wrap>
          <f.Button $checked={doing} onClick={() => setDoing(!doing)}>
            진행중
          </f.Button>
          <f.Button $checked={done} onClick={() => setDone(!done)}>
            진행완료
          </f.Button>
        </f.Wrap>
        <f.Condition>나이</f.Condition>
        <f.AgeWrap>
          <f.StartAge $age={values[0]}>{values[0]}세</f.StartAge>
          <RangeSlieder values={values} setValues={setValues} />
          <f.EndAge $age={values[1]}>{values[1]}세</f.EndAge>
        </f.AgeWrap>
      </f.Container>
      <f.Footer>
        <ResetButton text="초기화" onClick={() => onClickReset()} />
        <LargeButton
          text="필터 적용하기"
          onClick={() => onClickSubmit()}
        ></LargeButton>
      </f.Footer>
    </>
  )
}

export default FilterCondition
