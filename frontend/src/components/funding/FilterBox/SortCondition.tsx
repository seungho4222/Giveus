import { sortCondition } from '@/assets/data/fundingCondition'
import { StringStateType } from '@/types/commonType'
import * as s from '@components/funding/FilterBox/SortCondition.styled'

const SortCondition = (props: StringStateType) => {
  const { value, setValue } = props

  return (
    <s.Container>
      <s.Wrap onClick={() => setValue(sortCondition[0])}>
        <s.RadioInput
          type="radio"
          name="sort"
          checked={value === sortCondition[0]}
          readOnly
        />
        {sortCondition[0]}
      </s.Wrap>
      <s.Wrap onClick={() => setValue(sortCondition[1])}>
        <s.RadioInput
          type="radio"
          name="sort"
          checked={value === sortCondition[1]}
          readOnly
        />
        {sortCondition[1]}
      </s.Wrap>
      <s.Wrap onClick={() => setValue(sortCondition[2])}>
        <s.RadioInput
          type="radio"
          name="sort"
          checked={value === sortCondition[2]}
          readOnly
        />
        {sortCondition[2]}
      </s.Wrap>
      <s.Wrap onClick={() => setValue(sortCondition[3])}>
        <s.RadioInput
          type="radio"
          name="sort"
          checked={value === sortCondition[3]}
          readOnly
        />
        {sortCondition[3]}
      </s.Wrap>
      <s.Wrap onClick={() => setValue(sortCondition[4])}>
        <s.RadioInput
          type="radio"
          name="sort"
          checked={value === sortCondition[4]}
          readOnly
        />
        {sortCondition[4]}
      </s.Wrap>
    </s.Container>
  )
}

export default SortCondition
