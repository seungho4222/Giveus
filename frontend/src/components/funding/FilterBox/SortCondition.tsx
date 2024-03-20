import { sortCondition } from '@/assets/data/fundingCondition'
import { sortState } from '@/stores/filterAndSort'
import * as s from '@components/funding/FilterBox/SortCondition.styled'
import { useRecoilState } from 'recoil'

const SortCondition = () => {
  const [sort, setSort] = useRecoilState(sortState)

  return (
    <s.Container>
      <s.Wrap onClick={() => setSort(sortCondition[0])}>
        <s.RadioInput
          type="radio"
          name="sort"
          checked={sort === sortCondition[0]}
          readOnly
        />
        {sortCondition[0]}
      </s.Wrap>
      <s.Wrap onClick={() => setSort(sortCondition[1])}>
        <s.RadioInput
          type="radio"
          name="sort"
          checked={sort === sortCondition[1]}
          readOnly
        />
        {sortCondition[1]}
      </s.Wrap>
      <s.Wrap onClick={() => setSort(sortCondition[2])}>
        <s.RadioInput
          type="radio"
          name="sort"
          checked={sort === sortCondition[2]}
          readOnly
        />
        {sortCondition[2]}
      </s.Wrap>
      <s.Wrap onClick={() => setSort(sortCondition[3])}>
        <s.RadioInput
          type="radio"
          name="sort"
          checked={sort === sortCondition[3]}
          readOnly
        />
        {sortCondition[3]}
      </s.Wrap>
      <s.Wrap onClick={() => setSort(sortCondition[4])}>
        <s.RadioInput
          type="radio"
          name="sort"
          checked={sort === sortCondition[4]}
          readOnly
        />
        {sortCondition[4]}
      </s.Wrap>
    </s.Container>
  )
}

export default SortCondition
