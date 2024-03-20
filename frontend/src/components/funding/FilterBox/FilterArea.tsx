import { ageRangeState, filterStatusState } from '@/stores/filterAndSort'
import * as f from '@components/funding/FilterBox/FilterArea.styled'
import { useRecoilState } from 'recoil'

const FilterArea = () => {
  const [filterStatus, setFilterStatus] = useRecoilState(filterStatusState)
  const [ageRange, setAgeRange] = useRecoilState(ageRangeState)

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
