import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'currentAdmin',
  storage: localStorage,
})

const defaultAdmin = {
  adminNo: 1,
  id: '',
  name: '',
  createdAt: '',
  provider: '',
  snsKey: '',
}

export const adminState = atom<any>({
  key: 'adminState',
  default: defaultAdmin,
  effects_UNSTABLE: [persistAtom],
})
