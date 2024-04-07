import { authRequest } from '@/utils/requestMethods'

const url = '/api/v1/notification'

// 알림 전체 조회
export const fetchNotificationAll = async (memberNo: number) =>
  authRequest
    .get(`${url}/${memberNo}`)
    .then(res => res.data.data)
    .catch(err => err)

// 알림 전체 읽음 여부 변경
export const readNotificationAll = async (memberNo: number) =>
  authRequest
    .patch(`${url}/changeAll/${memberNo}`)
    .then(res => res.data.data)
    .catch(err => err)

// 알림 단일 읽음 여부 변경
export const readNotification = async (notificationNo: number) =>
  authRequest
    .patch(`${url}/${notificationNo}`)
    .then(res => res.data.data)
    .catch(err => err)
