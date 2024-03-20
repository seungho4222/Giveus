import { AgeRangeType, FilterStatusType } from '@/types/fundingType'
import * as f from '@components/funding/FilterBox/FilterArea.styled'

const FilterArea = (props: FilterStatusType & AgeRangeType) => {
  const { filterStatus, setFilterStatus, ageRange, setAgeRange } = props

  const onClickDelete = (idx: number) => {
    if (idx === 2) setAgeRange([0, 100])
    const updatedFilterStatus = [...filterStatus]
    updatedFilterStatus[idx] = false
    setFilterStatus(updatedFilterStatus)
  }

  return (
    <f.Container>
      {filterStatus[0] && (
        <f.Button onClick={() => onClickDelete(0)}>
          진행중
          <f.Icon src="/icon/icon_close_blue.png" alt="" />
        </f.Button>
      )}
      {filterStatus[1] && (
        <f.Button onClick={() => onClickDelete(1)}>
          진행완료
          <f.Icon src="/icon/icon_close_blue.png" alt="" />
        </f.Button>
      )}
      {filterStatus[2] && (
        <f.Button onClick={() => onClickDelete(2)}>
          {ageRange[0]}세 ~ {ageRange[1]}세
          <f.Icon src="/icon/icon_close_blue.png" alt="" />
        </f.Button>
      )}
    </f.Container>
  )
}

export default FilterArea
