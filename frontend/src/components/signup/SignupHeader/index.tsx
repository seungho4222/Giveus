import { themeState } from '@stores/theme'
import { NumberStateType } from '@/types/commonType'
import * as s from '@components/signup/SignupHeader/SignupHeader.styled'
import { useRecoilValue } from 'recoil'

const Index = (props: NumberStateType) => {
  const theme = useRecoilValue(themeState)
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
      <s.Bar $theme={theme}>
        <s.CurrentBar $stage={value} />
      </s.Bar>
    </>
  )
}

export default Index
