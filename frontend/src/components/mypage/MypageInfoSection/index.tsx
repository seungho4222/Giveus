import * as m from '@components/mypage/MypageInfoSection/MypageInfoSection.styled'
import MypageBasicInfo from '@components/mypage/MypageInfoSection/MypageBasicInfo'
import MypagePointSection from '@components/mypage/MypageInfoSection/MypagePointSection'
import { useRecoilValue } from 'recoil'
import { userState } from '@stores/user'

const Index = () => {
  const userInfo = useRecoilValue(userState)

  return (
    <m.Container>
      <m.Wrap>
        <m.Nickname>{userInfo.nickname}님</m.Nickname>
        <MypageBasicInfo
          name={userInfo.name}
          profile={userInfo.imageUrl}
          email={userInfo.email}
        />
        <MypagePointSection memberNo={userInfo.memberNo} />
      </m.Wrap>
    </m.Container>
  )
}

export default Index
