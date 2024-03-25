import { navType } from '@/types/navType'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'currentNav',
  storage: localStorage,
})

export const currentNavState = atom<navType>({
  key: 'currentNavState',
  default: {
    name: 'Funding List',
    url: '/admin/funding',
  },
  effects_UNSTABLE: [persistAtom],
})
