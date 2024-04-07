import * as m from '@components/mypage/MypagePoint/MypagePoint.styled'
import { useRecoilState, useRecoilValue } from 'recoil'
import { myPointState } from '@stores/point'
import { themeState } from '@stores/theme'
import { userState } from '@stores/user'
import { useQuery } from '@tanstack/react-query'
import { PointsListType } from '@/types/mypageType'
import { fetchMemberPoints } from '@apis/payment'
import { useEffect } from 'react'
import { formatAmount } from '@/utils/format'

const Index = () => {
  const userInfo = useRecoilValue(userState)
  const theme = useRecoilValue(themeState)
  const [myPoint, setMyPoint] = useRecoilState(myPointState)

  const { data } = useQuery<PointsListType>({
    queryKey: ['fetchMemberPoints'],
    queryFn: () => fetchMemberPoints(userInfo.memberNo),
  })

  useEffect(() => {
    caculateMyPoint()
  }, [data])

  // 내 포인트 계산
  const caculateMyPoint = () => {
    setMyPoint(0)
    data &&
      data.rechargeList.forEach(item => {
        setMyPoint(old => old + item.amount)
      })
    data &&
      data.usageList.forEach(item => {
        setMyPoint(old => old - item.amount)
      })
  }

  return (
    <m.Container $theme={theme}>
      <m.Title>내 포인트</m.Title>
      <m.Point>{formatAmount(myPoint)}P</m.Point>
    </m.Container>
  )
}

export default Index
