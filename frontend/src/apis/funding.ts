import { authRequest, publicRequest } from '@utils/requestMethods'

const url = '/api/v1/funding'

// 펀딩 목록 조회
export const fetchFundingList = async () => {
  return authRequest.get(`${url}`).then(res => res.data.data)
}

// 펀딩 상세 조회
export const fetchFundingDetail = async (id: number) => {
  return authRequest.get(`${url}/${id}`).then(res => res.data.data)
}

// 펀딩 상세 - 기부자 명단 조회
export const fetchFundingParticipants = async (id: number) => {
  return authRequest.get(`${url}/${id}/participants`).then(res => res.data.data)
}

// 펀딩 2차 등록
export const createSecondReg = async (data: FormData) => {
  return publicRequest
    .post(`${url}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(res => res.data)
}

// 펀딩명 검색
export const searchFunding = async (query: string) => {
  return publicRequest
    .get(`${url}/search?query=${query}`)
    .then(res => res.data.data)
    .catch(err => err)
}
