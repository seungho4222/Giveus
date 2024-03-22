import { getMessaging, onMessage } from 'firebase/messaging'
import { app } from '@/services/initFirebase'

const messaging = getMessaging(app)

onMessage(messaging, payload => {
  console.log('알림 도착 ', payload)
  const notificationTitle =
    payload && payload.notification && payload.notification.title
  const notificationOptions = {
    body: payload && payload.notification && payload.notification.body,
  }

  if (Notification.permission === 'granted' && notificationTitle) {
    new Notification(notificationTitle, notificationOptions)
  }
})
