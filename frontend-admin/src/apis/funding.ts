import { authRequest } from '@utils/requestMethods'

const url = '/api/v1/admin/funding'

// 펀딩 목록 조회
export const fetchFundingList = async (adminNo: number) => {
  return authRequest.get(`${url}?adminNo=${adminNo}`).then(res => res.data.data)
}
