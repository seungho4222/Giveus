import { AlarmType } from '@/types/alarmType'
import AlarmListItem from '@components/alarm/AlarmList/AlarmListItem'
import * as a from '@components/alarm/AlarmList/AlarmList.styled'

const Index = (props: { data: AlarmType[] }) => {
  const { data } = props

  return (
    <a.Container>
      {data &&
        data.map(item => (
          <AlarmListItem item={item} key={item.notificationNo} />
        ))}
    </a.Container>
  )
}

export default Index
