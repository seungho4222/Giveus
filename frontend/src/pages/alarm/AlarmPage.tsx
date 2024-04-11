import { userState } from '@stores/user'
import { fetchNotificationAll } from '@apis/notification'
import Navbar from '@common/Navbar'
import AlarmHeader from '@components/alarm/AlarmHeader'
import AlarmList from '@components/alarm/AlarmList'
import * as a from '@pages/alarm/AlarmPage.styled'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'

const AlarmPage = () => {
  const user = useRecoilValue(userState)

  const { data } = useQuery({
    queryKey: ['fetchNotificationAll'],
    queryFn: () => fetchNotificationAll(user.memberNo),
  })

  return (
    <>
      <a.Container>
        <AlarmHeader />
        <a.Wrap>
          <AlarmList data={data} />
        </a.Wrap>
      </a.Container>
      <Navbar current="alarm" />
    </>
  )
}

export default AlarmPage
