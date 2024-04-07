import { userState } from '@stores/user'
import * as m from '@components/mypage/MypageActivity/MypageActivity.styled'
import MypageMenuItem from '@components/mypage/MypageMenuItem'
import { useRecoilValue } from 'recoil'

const Index = () => {
  const userInfo = useRecoilValue(userState)

  return (
    <m.Container>
      <m.Title>내 활동</m.Title>
      <MypageMenuItem
        title="계정"
        text={userInfo.memberNo !== -1 ? userInfo.email : ''}
        imgSrc="/icon/icon_mypage1.png"
        imgSrc_dark="/icon/icon_mypage1_dark.png"
        width={11}
        height={14}
      />
      <MypageMenuItem
        title="포인트 관리"
        url="/mypage/points"
        imgSrc="/icon/icon_mypage2.png"
        imgSrc_dark="/icon/icon_mypage2_dark.png"
        width={13}
        height={11}
      />
      <MypageMenuItem
        title="후원내역"
        url="/mypage/donate"
        imgSrc="/icon/icon_mypage3.png"
        imgSrc_dark="/icon/icon_mypage3_dark.png"
        width={11}
        height={15}
      />
    </m.Container>
  )
}

export default Index
