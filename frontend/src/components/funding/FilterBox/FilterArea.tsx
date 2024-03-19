import { FilterStatusType } from '@/types/fundingType'
import * as f from '@components/funding/FilterBox/FilterArea.styled'

const FilterArea = (props: FilterStatusType) => {
  const { filterStatus, setFilterStatus } = props

  const onClickHandler = (idx: number) => {
    const updatedFilterStatus = [...filterStatus]
    updatedFilterStatus[idx] = false
    setFilterStatus(updatedFilterStatus)
  };

  return (
    <f.Container>
      {filterStatus[0] && (
        <f.Button onClick={() => onClickHandler(0)}>
          진행중
          <f.Icon src="/icon/icon_close_blue.png" alt="" />
        </f.Button>
      )}
      {filterStatus[1] && (
        <f.Button onClick={() => onClickHandler(1)}>
          진행완료
          <f.Icon src="/icon/icon_close_blue.png" alt="" />
        </f.Button>
      )}
      {filterStatus[2] && (
        <f.Button onClick={() => onClickHandler(2)}>
          10세 ~ 50세
          <f.Icon src="/icon/icon_close_blue.png" alt="" />
        </f.Button>
      )}
    </f.Container>
  )
}

export default FilterArea
