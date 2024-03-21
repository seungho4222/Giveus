import * as p from '@components/points/PointsList/PontsList.styled'
import PointsListItem from '@components/points/PointsList/PointsListItem'
import { PointsListType, PointItemType } from '@/types/mypageType'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { filteredMyPointListState, myPointListState } from '@stores/point'

const Index = (props: PointsListType) => {
  const { usageData, rechargeData } = props
  const [, setMyPointList] = useRecoilState(myPointListState)
  const filteredMyPointList = useRecoilValue(filteredMyPointListState)

  useEffect(() => {
    setDataForm()
  }, [usageData, rechargeData])

  const setDataForm = async () => {
    let items: PointItemType[] = []
    // 사용 내역
    await usageData.map(item => {
      const obj: PointItemType = {
        type: '사용',
        content: item.content,
        amount: item.amount,
        createdAt: item.createdAt,
        total: 0,
      }
      items.push(obj)
    })
    // 충전 내역
    await rechargeData.map(item => {
      const obj: PointItemType = {
        type: '충전',
        content: item.content + ' 결제',
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

  return (
    <p.Container>
      {filteredMyPointList.map((item, index) => (
        <PointsListItem key={index} item={item} />
      ))}
    </p.Container>
  )
}
export default Index
