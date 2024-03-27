import * as p from '@components/points/PointsList/PontsList.styled'
import PointsListItem from '@components/points/PointsList/PointsListItem'
import { PointItemType, PointsListType } from '@/types/mypageType'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
  filteredMyPointListState,
  myPointListState,
  myPointState,
} from '@stores/point'
import { userState } from '@stores/user'
import { useQuery } from '@tanstack/react-query'
import { fetchMemberPoints } from '@apis/payment'

const Index = () => {
  const [, setMyPointList] = useRecoilState(myPointListState)
  const filteredMyPointList = useRecoilValue(filteredMyPointListState)
  const userInfo = useRecoilValue(userState)
  const setMyPoint = useSetRecoilState(myPointState)

  const { data } = useQuery<PointsListType>({
    queryKey: ['fetchMemberPoints'],
    queryFn: () => fetchMemberPoints(userInfo.memberNo),
  })

  useEffect(() => {
    setDataForm()
    caculateMyPoint()
  }, [data])

  const setDataForm = async () => {
    let items: PointItemType[] = []
    // 사용 내역
    data &&
      data.rechargeList.map(item => {
        const obj: PointItemType = {
          type: '충전',
          content: item.content,
          amount: item.amount,
          total: 0,
          createdAt: item.createdAt,
        }
        items.push(obj)
      })
    data &&
      data.usageList.map(item => {
        const obj: PointItemType = {
          type: '사용',
          content: item.title,
          amount: item.amount,
          createdAt: item.createdAt,
          total: 0,
        }
        items.push(obj)
      })

    // 과거순 정렬
    items.sort(
      (b, a) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )

    // total 계산
    let total = 0
    items.forEach(item => {
      item.type === '충전' ? (total += item.amount) : (total -= item.amount)
      item.total = total
    })

    // 최신순 정렬
    items.reverse()

    setMyPointList(items)
  }

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
    <p.Container>
      {filteredMyPointList.map((item, index) => (
        <PointsListItem key={index} item={item} />
      ))}
    </p.Container>
  )
}
export default Index
