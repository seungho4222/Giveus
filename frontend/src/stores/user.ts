import { userType } from '@/types/authType'
import { atom } from 'recoil'

export const userState = atom<userType>({
  key: 'userState',
  default: {
    memberNo: -1,
    email: 'naerim1119@gmail.com',
    name: '김내림',
    nickname: '익명의 쿼카',
    createdAt: '2024-03-15',
    imageUrl: '/img/img_default_profile.png',
    provider: '',
    snsKey: '',
  },
})
