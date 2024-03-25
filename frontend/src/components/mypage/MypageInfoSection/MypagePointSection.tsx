import { myPointListState } from '@stores/point'
import * as m from '@components/mypage/MypageInfoSection/MypagePointSection.styled'
import { useRecoilValue } from 'recoil'

const MypagePointSection = (props: { memberNo: number }) => {
  const myPointsList = useRecoilValue(myPointListState)

  const { memberNo } = props

  console.log(myPointsList)

  const countPoint = () => {
    let total = 0

    console.log(memberNo)
    return '20,000'
  }

  return (
    <m.Container>
      <m.Top>
        <img src="/icon/icon_coins.png" />
        <span>보유 포인트</span>
      </m.Top>
      <m.PointBox>{countPoint()} P</m.PointBox>
      <m.Desc>* 충전한 포인트는 원화로 환전할 수 없습니다</m.Desc>
    </m.Container>
  )
}

export default MypagePointSection
