import Navbar from '@common/Navbar'
import Layout from '@common/Layout'
import MypageInfoSection from '@components/mypage/MypageInfoSection'
import { useRecoilValue } from 'recoil'
import { userState } from '@stores/user'
import MypageHeader from '@components/mypage/MypageHeader'
import MypagePoint from '@components/mypage/MypagePoint'
import MypageActivity from '@components/mypage/MypageActivity'
import MypageSetting from '@components/mypage/MypageSetting'

const MyPage = () => {
  const userInfo = useRecoilValue(userState)

  return (
    <>
      <Layout>
        <MypageHeader />
        <MypageInfoSection />
        {userInfo.memberNo !== -1 && <MypagePoint />}
        <MypageActivity />
        <MypageSetting />
      </Layout>
      <Navbar current="mypage" />
    </>
  )
}

export default MyPage
