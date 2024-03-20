import * as p from '@components/points/PointsList/PontsList.styled'
import PointsListItem from '@components/points/PointsList/PointsListItem'
import { PointsListType, PointItemType } from '@/types/mypageType'
import { useEffect, useState } from 'react'

const Index = (props: PointsListType) => {
  const { usageData, rechargeData } = props
  const [data, setData] = useState<PointItemType[]>([])

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
      }
      items.push(obj)
    })

    // 최신순 정렬
    items.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )

    setData(items)
  }

  return (
    <p.Container>
      {data &&
        data.map((item, index) => <PointsListItem key={index} item={item} />)}
    </p.Container>
  )
}
export default Index
