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
