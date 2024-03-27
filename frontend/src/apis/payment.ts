import { authRequest } from '@/utils/requestMethods'

const url = '/api/v1/payment'

export const kakaoPayReady = () =>
  authRequest
    .post(`${url}/kakao/ready`)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => console.log(err))

// 회원 포인트 내역 조회
export const fetchMemberPoints = (memberNo: number) =>
  authRequest
    .get(`${url}/point/${memberNo}`)
    .then(res => res.data.data)
    .catch(err => console.log(err))
