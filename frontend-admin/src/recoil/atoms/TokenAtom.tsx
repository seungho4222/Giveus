import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist()

const tokenState = atom({
  key: 'tokenState',
  default: undefined,
  effects_UNSTABLE:[persistAtom],
})

export default tokenState