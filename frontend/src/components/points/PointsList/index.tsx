import * as p from '@components/points/PointsList/PontsList.styled'
import PointsListItem from '@components/points/PointsList/PointsListItem'
import { PointsListType, rechargePointType } from '@/types/mypageType'
import { useEffect, useState } from 'react'

const Index = (props: PointsListType) => {
  const { usageData, rechargeData } = props
  const [data, setData] = useState<rechargePointType[]>([])

  useEffect(() => {
    setData(usageData.concat(rechargeData))
  }, [usageData, rechargeData])

  return (
    <p.Container>
      {data &&
        data.map((item, index) => <PointsListItem key={index} item={item} />)}
    </p.Container>
  )
}
export default Index
