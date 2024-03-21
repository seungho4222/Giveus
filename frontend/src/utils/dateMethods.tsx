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
  const end = new Date(endDate).getTime()

  return dates.filter(item => {
    const check = new Date(item.createdAt.split(' ')[0]).getTime()
    return check >= start && check <= end
  })
}
