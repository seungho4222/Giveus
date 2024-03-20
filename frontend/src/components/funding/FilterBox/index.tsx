import { sortState } from '@/stores/filterAndSort'
import { FilterBoxType } from '@/types/fundingType'
import { fundingCondition } from '@assets/data/fundingCondition'
import * as f from '@components/funding/FilterBox/FilterBox.styled'
import { useRecoilValue } from 'recoil'

const Index = (props: FilterBoxType) => {
  const { setFilterOpen, setSortrOpen } = props
  const sort = useRecoilValue(sortState)

  return (
    <f.Container>
      {fundingCondition.map(item => (
        <f.Button
          key={item.name}
          onClick={() =>
            item.name === 'filter' ? setFilterOpen(true) : setSortrOpen(true)
          }
        >
          <f.Icon
            src={item.imgSrc}
            alt=""
            width={item.width}
            height={item.height}
          />
          <f.Label>{item.name === 'filter' ? item.label : sort}</f.Label>
        </f.Button>
      ))}
    </f.Container>
  )
}

export default Index
