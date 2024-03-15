export {}

declare global {
  interface Window {
    Kakao: any // 사용하고자 하는 프로퍼티의 타입 체킹을 제거한다
  }
}
