import { authRequest } from '@/utils/requestMethods'

const url = '/api/v1/payment'

export const kakaoPayReady = () => {
  authRequest
    .post(`${url}/kakao/ready`)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => console.log(err))
}
