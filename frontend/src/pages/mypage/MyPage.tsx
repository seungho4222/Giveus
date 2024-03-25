import Navbar from '@common/Navbar'
import Layout from '@common/Layout'
import MypageInfoSection from '@components/mypage/MypageInfoSection'
import MypageMenu from '@components/mypage/MypageMenu'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userState } from '@stores/user'
import { fetchMemberPoints } from '@apis/payment'
import { PointsListType } from '@/types/mypageType'
import { myPointsListState } from '@stores/point'
import { useEffect } from 'react'

const MyPage = () => {
  const userInfo = useRecoilValue(userState)
  const setMyPointsList = useSetRecoilState(myPointsListState)

  const { data } = useQuery<PointsListType>({
    queryKey: ['fetchMemberPoints'],
    queryFn: () => fetchMemberPoints(userInfo.memberNo),
  })

  useEffect(() => {
    data && setMyPointsList(data)
    console.log(data)
  }, [data])

  // 포인트 사용내역 및 충전내역 저장

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
