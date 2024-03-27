import { authRequest } from '@utils/requestMethods'

const url = '/api/v1/admin'

// 펀딩 목록 조회
export const fetchFundingList = async (adminNo: number) => {
  return authRequest.get(`${url}/${adminNo}/funding`).then(res => res.data.data)
}

// 펀딩 상세 조회
export const fetchFundingDetail = async (fundingNo: number) => {
  return authRequest.get(`${url}/funding/${fundingNo}`).then(res => res.data.data)
}
