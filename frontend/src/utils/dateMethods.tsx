import { UserDonationsType } from '@/types/fundingType'
import { PointItemType } from '@/types/mypageType'

const today = new Date()

// 오늘 날짜
export const getTodayDate = () => {
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return year + '-' + month + '-' + day
}

// 한 달 전
export const getOneMonthAgoDate = () => {
  var oneMonthAgo = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    today.getDate(),
  )
  var year = oneMonthAgo.getFullYear()
  var month = String(oneMonthAgo.getMonth() + 1).padStart(2, '0')
  var day = String(oneMonthAgo.getDate()).padStart(2, '0')

  return year + '-' + month + '-' + day
}

// 시작 날짜와 종료 날짜 사이에 있는 날짜 반환
export const filterDatesInRange = (
  dates: PointItemType[],
  startDate: string,
  endDate: string,
) => {
  const start = new Date(startDate).getTime()
  // 9시 기준으로 되어 있어서 그 날의 마지막 시간대로 세팅
  const end = new Date(endDate).setHours(23, 59, 59, 999)

  return dates.filter(item => {
    const check = new Date(item.createdAt.split(' ')[0]).getTime()
    return check >= start && check <= end
  })
}

export const donatefilterDatesInRange = (
  dates: UserDonationsType[],
  startDate: string,
  endDate: string,
) => {
  const start = new Date(startDate).getTime()
  const end = new Date(endDate).setHours(23, 59, 59, 999)

  return dates.filter(item => {
    const check = new Date(item.createdAt.split(' ')[0]).getTime()
    return check >= start && check <= end
  })
}

//  이벤트가 발생한 시점까지의 시간 계산
export const elapsedTime = (date: string) => {
  const start = new Date(date)
  const end = new Date()

  const seconds = Math.floor((end.getTime() - start.getTime()) / 1000)

  if (seconds < 60) return '방금 전'
  const minutes = seconds / 60
  if (minutes < 60) return `${Math.floor(minutes)}분 전`
  const hours = minutes / 60
  if (hours < 24) return `${Math.floor(hours)}시간 전`

  // 날짜만 고려하여 '몇 일 전' 계산
  const startDay = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate(),
  )
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate())
  const days = Math.ceil(
    (endDay.getTime() - startDay.getTime()) / (1000 * 60 * 60 * 24),
  )
  return `${days}일 전`
}
