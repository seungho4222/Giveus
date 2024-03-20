import { FundingType } from '@/types/fundingType'

export const filterByDoing = (data: FundingType[]): FundingType[] => {
  return data.filter(item => item.status === '진행중')
}

export const filterByDone = (data: FundingType[]): FundingType[] => {
  return data.filter(item => item.status === '진행완료')
}

const calculateAge = (birth: string, createdAt: string) => {
  const birthDate = new Date(birth)
  const createdAtDate = new Date(createdAt)

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

export const filterByAge = (
  data: FundingType[],
  startAge: number,
  endAge: number,
): FundingType[] => {
  return data.filter(item => {
    const targetAge = calculateAge(item.birth, item.createdAt)
    return targetAge >= startAge && targetAge <= endAge
  })
}
