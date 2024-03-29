import Navbar from '@common/Navbar'
import Layout from '@common/Layout'
import MypageInfoSection from '@components/mypage/MypageInfoSection'
import MypageMenu from '@components/mypage/MypageMenu'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userState } from '@stores/user'
import { fetchMemberPoints } from '@apis/payment'
import { PointsListType } from '@/types/mypageType'
import { myPointState } from '@stores/point'
import { useEffect } from 'react'
import MypageHeader from '@components/mypage/MypageHeader'
import MypagePoint from '@components/mypage/MypagePoint'
import MypageActivity from '@components/mypage/MypageActivity'

const MyPage = () => {
  const userInfo = useRecoilValue(userState)

  return (
    <>
      <Layout>
        <MypageHeader />
        <MypageInfoSection />
        {userInfo.memberNo !== -1 && <MypagePoint />}
        <MypageActivity />
        {/* <MypageMenu /> */}
      </Layout>
      <Navbar current="mypage" />
    </>
  )
}

export default MyPage
