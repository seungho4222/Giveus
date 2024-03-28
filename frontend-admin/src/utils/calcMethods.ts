export const calculateAge = (birth: string) => {
  const birthDate = new Date(birth)
  const today = new Date()

  let year = today.getFullYear() // 년도
  let month = today.getMonth() + 1 // 월
  let date = today.getDate() // 날짜

  const createdAtDate = new Date(year + '/' + month + '/' + date)

  const age = createdAtDate.getFullYear() - birthDate.getFullYear()

  if (
    createdAtDate.getMonth() < birthDate.getMonth() ||
    (createdAtDate.getMonth() === birthDate.getMonth() &&
      createdAtDate.getDate() < birthDate.getDate())
  ) {
    return age - 1
  } else {
    return age
  }
}
