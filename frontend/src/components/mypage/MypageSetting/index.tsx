import * as m from '@components/mypage/MypageSetting/MypageSetting.styled'
import MypageMenuItem from '@components/mypage/MypageMenuItem'
import { useRecoilValue } from 'recoil'
import { userState } from '@stores/user'

const Index = () => {
  const userInfo = useRecoilValue(userState)

  return (
    <m.Container>
      <m.Title>내 설정</m.Title>
      <MypageMenuItem
        title="설정"
        url="/mypage/setting"
        imgSrc="/icon/icon_mypage4.png"
        imgSrc_dark="/icon/icon_mypage4_dark.png"
        width={13}
        height={14}
      />
      {userInfo.memberNo !== -1 && (
        <MypageMenuItem
          title="로그아웃"
          imgSrc="/icon/icon_mypage5.png"
          imgSrc_dark="/icon/icon_mypage5_dark.png"
          width={14}
          height={15}
        />
      )}
    </m.Container>
  )
}

export default Index
