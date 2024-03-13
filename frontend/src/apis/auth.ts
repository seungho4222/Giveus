import { authRequest } from '@utils/requestMethods'

const url = '/api/auth'

// 5분에 한 번 저장
const JWT_EXPIRY_TIME = 3600 * 1000

// refresh token 요청
export const refresh = async () => {
  return authRequest
    .post(`${url}/refresh`)
    .then(res => loginSuccess(res.data))
    .catch(err => console.log(err))
}

// 로그인 성공 시
export const loginSuccess = async (res: { accessToken: string }) => {
  const { accessToken } = res

  authRequest.defaults.headers.Authorization = `Bearer ${accessToken}`
  setTimeout(() => refresh(), JWT_EXPIRY_TIME - 5000)
}
