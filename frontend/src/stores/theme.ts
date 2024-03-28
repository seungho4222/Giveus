import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'theme',
  storage: localStorage,
})

export enum ThemeFlag {
  light,
  dark,
}

export const themeState = atom<ThemeFlag>({
  key: 'themeState',
  default: ThemeFlag.light,
  effects_UNSTABLE: [persistAtom],
})
