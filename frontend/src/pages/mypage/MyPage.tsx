import Navbar from '@common/Navbar'
import MypageInfoSection from '@components/mypage/MypageInfoSection'
import { useRecoilValue } from 'recoil'
import { userState } from '@stores/user'
import MypageHeader from '@components/mypage/MypageHeader'
import MypagePoint from '@components/mypage/MypagePoint'
import MypageActivity from '@components/mypage/MypageActivity'
import MypageSetting from '@components/mypage/MypageSetting'
import * as m from '@pages/mypage/MyPage.styled'

const MyPage = () => {
  const userInfo = useRecoilValue(userState)

  return (
    <>
      <m.Container>
        <MypageHeader />
        <m.Wrap>
          <MypageInfoSection />
          {userInfo.memberNo !== -1 && <MypagePoint />}
          <MypageActivity />
          <MypageSetting />
        </m.Wrap>
      </m.Container>
      <Navbar current="mypage" />
    </>
  )
}

export default MyPage
