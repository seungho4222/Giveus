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

const MyPage = () => {
  const userInfo = useRecoilValue(userState)
  // const setMyPoint = useSetRecoilState(myPointState)

  // const { data } = useQuery<PointsListType>({
  //   queryKey: ['fetchMemberPoints'],
  //   queryFn: () => fetchMemberPoints(userInfo.memberNo),
  // })

  // useEffect(() => {
  //   caculateMyPoint()
  // }, [data])

  // // 내 포인트 계산
  // const caculateMyPoint = () => {
  //   setMyPoint(0)
  //   data &&
  //     data.rechargeList.forEach(item => {
  //       setMyPoint(old => old + item.amount)
  //     })
  //   data &&
  //     data.usageList.forEach(item => {
  //       setMyPoint(old => old - item.amount)
  //     })
  // }

  return (
    <>
      <Layout>
        <MypageHeader />
        <MypageInfoSection />
        <MypageMenu />
      </Layout>
      <Navbar current="mypage" />
    </>
  )
}

export default MyPage
