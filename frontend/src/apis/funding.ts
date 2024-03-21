import { authRequest } from '@utils/requestMethods'

const url = '/api/v1'

// 펀딩 목록 조회
export const fetchFundingList = async () => {
  return authRequest.get(`${url}/funding`).then(res => res.data.data)
}

export const fetchFundingDetail = async (id: number) => {
  return authRequest.get(`${url}/funding/${id}`).then(res => res.data.data)
}
