import { myPointState } from '@stores/point'
import * as m from '@components/mypage/MypageInfoSection/MypagePointSection.styled'
import { useRecoilValue } from 'recoil'
import { formatAmount } from '@utils/format'

const MypagePointSection = () => {
  const myPoint = useRecoilValue(myPointState)

  return (
    <m.Container>
      <m.Top>
        <img src="/icon/icon_coins.png" />
        <span>보유 포인트</span>
      </m.Top>
      <m.PointBox>{formatAmount(myPoint)} P</m.PointBox>
      <m.Desc>* 충전한 포인트는 원화로 환전할 수 없습니다</m.Desc>
    </m.Container>
  )
}

export default MypagePointSection
