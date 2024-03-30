import Navbar from '@common/Navbar'
import AlarmHeader from '@components/alarm/AlarmHeader'
import AlarmList from '@components/alarm/AlarmList'
import * as a from '@pages/alarm/AlarmPage.styled'

const data = [
  {
    notificationNo: 3,
    memberNo: 1,
    category: 'review',
    content: '소아암 6세(남) 펀딩',
    detail: '펀딩의 후기가 등록되었습니다',
    createdAt: '2024.02.08 12:13',
    isRead: 0,
  },
  {
    notificationNo: 2,
    memberNo: 1,
    category: 'payment',
    content: '정기결제',
    detail: '2월 정기결제가 이루어졌습니다.',
    createdAt: '2024.02.15 12:13',
    isRead: 1,
  },
  {
    notificationNo: 1,
    memberNo: 1,
    category: 'recommend',
    content: '소아암 6세(남) 펀딩',
    detail: '회원님께 추천드리는 펀딩 정보입니다.',
    createdAt: '2024.02.08 12:13',
    isRead: 1,
  },
]

const AlarmPage = () => {
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
