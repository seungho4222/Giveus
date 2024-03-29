import SettingSection from '@components/setting/SettingSection'
import MypagePrevHeader from '@components/mypage/MypagePrevHeader'

const SettingPage = () => {
  return (
    <>
      <MypagePrevHeader title="설정" url="/mypage" />
      <SettingSection />
    </>
  )
}

export default SettingPage
