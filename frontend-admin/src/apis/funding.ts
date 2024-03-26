import { authRequest } from '@utils/requestMethods'

const url = '/api/v1/admin/funding'

// 펀딩 목록 조회
export const fetchFundingList = async () => {
  return authRequest.get(`${url}?adminNo=${1}`).then(res => res.data.data)
}
