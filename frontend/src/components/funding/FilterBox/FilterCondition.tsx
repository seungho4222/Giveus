import LargeButton from '@/common/LargeButton'
import ResetButton from '@/common/ResetButton'
import * as f from '@components/funding/FilterBox/FilterCondition.styled'
import { Dispatch, SetStateAction, useState } from 'react'
import RangeSlieder from './RangeSlieder'
import { useRecoilState } from 'recoil'
import { ageRangeState, filterStatusState } from '@/stores/filterAndSort'

const FilterCondition = (props: {
  setFilterOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const { setFilterOpen } = props
  const [filterStatus, setFilterStatus] = useRecoilState(filterStatusState)
  const [ageRange, setAgeRange] = useRecoilState(ageRangeState)

  const [doing, setDoing] = useState<boolean>(filterStatus[0]) // 진행중
  const [done, setDone] = useState<boolean>(filterStatus[1]) // 진행완료
  const [values, setValues] = useState<ReadonlyArray<number>>(ageRange) // 나이 범위

  const onClickReset = () => {
    setDoing(true)
    setDone(false)
    setValues([0, 100])
    setFilterStatus([doing, done, false])
  }

  const onClickSubmit = () => {
    setFilterStatus([doing, done, values[0] !== 0 || values[1] !== 100])
    setFilterOpen(false)
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
