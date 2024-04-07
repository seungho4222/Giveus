import { themeState } from '@stores/theme'
import { AlarmType } from '@/types/alarmType'
import * as a from '@components/alarm/AlarmList/AlarmListItem.styled'
import { useRecoilValue } from 'recoil'
import { readNotification } from '@apis/notification'
import { useNavigate } from 'react-router-dom'

const AlarmListItem = (props: { item: AlarmType }) => {
  const navigate = useNavigate()
  const theme = useRecoilValue(themeState)
  const { item } = props

  // 알림 읽음 처리
  const changeReadState = () => readNotification(item.notificationNo)

  // 상세 페이지 이동
  const onClick = () => {
    changeReadState().then(() =>
      navigate(`/funding/${item.fundingNo}/detail-main/`),
    )
  }

  const setImage = (category: string) => {
    switch (category) {
      case 'USAGE':
        return {
          src: '/icon/icon_alarm_payment.png',
          width: '24px',
          height: '17px',
        }
      case 'REVIEW':
        return {
          src: '/icon/icon_alarm_review.png',
          width: '24px',
          height: '21px',
        }
      case 'RECOMMEND':
        return {
          src: '/icon/icon_alarm_recommend.png',
          width: '24px',
          height: '24px',
        }
    }
  }

  return (
    <a.Container $isRead={item.read} $theme={theme} onClick={onClick}>
      <a.Wrap>
        <a.ImgWrap $isRead={item.read} $theme={theme}>
          <img
            src={setImage(item.category)?.src}
            alt=""
            width={setImage(item.category)?.width}
            height={setImage(item.category)?.height}
          />
        </a.ImgWrap>
        <a.Right>
          <a.Detail>{item.detail}</a.Detail>
          <a.Content>{item.content}</a.Content>
          <a.Date>{item.createdAt}</a.Date>
        </a.Right>
      </a.Wrap>
    </a.Container>
  )
}

export default AlarmListItem
