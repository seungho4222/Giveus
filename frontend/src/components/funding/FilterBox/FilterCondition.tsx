import LargeButton from '@/common/LargeButton'
import ResetButton from '@/common/ResetButton'
import { FilterStatusType } from '@/types/fundingType'
import * as f from '@components/funding/FilterBox/FilterCondition.styled'
import { useState } from 'react'

const FilterCondition = (props: FilterStatusType) => {
  const { filterStatus, setFilterStatus, setFilterOpen } = props
  const [doing, setDoing] = useState<boolean>(filterStatus[0])
  const [done, setDone] = useState<boolean>(filterStatus[1])

  const onClickReset = () => {
    setDoing(false)
    setDone(false)
    setFilterStatus([doing, done, true])
  }

  const onClickSubmit = () => {
    setFilterStatus([doing, done, true])
    setFilterOpen && setFilterOpen(false)
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
        여기 상태바
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
