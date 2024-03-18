import * as m from '@components/mypage/MypageInfoSection/MypagePointSection.styled'

const MypagePointSection = (props: { memberNo: number }) => {
  const { memberNo } = props

  const countPoint = () => {
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
