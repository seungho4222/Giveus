import { NumberStateType } from '@/types/commonType'
import * as s from '@components/signup/SignupHeader/SignupHeader.styled'

const Index = (props: NumberStateType) => {
  const { value, setValue } = props

  return (
    <>
      <s.Wrap>
        <img
          src="icon/icon_arrow_gray.png"
          alt=""
          onClick={() => setValue(-1)}
        />
      </s.Wrap>
      <s.Bar>
        <s.CurrentBar $stage={value} />
      </s.Bar>
    </>
  )
}

export default Index
