import { FilterStatusType } from '@/types/fundingType'
import * as f from '@components/funding/FilterBox/FilterCondition.styled'
import { useState } from 'react'

const FilterCondition = (props: FilterStatusType) => {
  const { filterStatus, setFilterStatus } = props
  const [doing, setDoing] = useState<boolean>(filterStatus[0])
  const [done, setDone] = useState<boolean>(filterStatus[1])

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
      <f.Footer>초기화 + 버튼</f.Footer>
    </>
  )
}

export default FilterCondition
