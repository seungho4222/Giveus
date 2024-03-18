import Navbar from '@common/Navbar'
import Layout from '@common/Layout'
import MypageInfoSection from '@components/mypage/MypageInfoSection'
import MypageMenu from '@components/mypage/MypageMenu'

const MyPage = () => {
  return (
    <>
      <Layout>
        <MypageInfoSection />
        <MypageMenu />
      </Layout>
      <Navbar current="mypage" />
    </>
  )
}

export default MyPage
