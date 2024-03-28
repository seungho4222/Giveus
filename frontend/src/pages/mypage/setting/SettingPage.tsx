import SettingSection from '@components/setting/SettingSection'
import MypagePrevHeader from '@components/mypage/MypagePrevHeader'
import LogoutSection from '@components/setting/LogoutSection'

const SettingPage = () => {
  return (
    <>
      <MypagePrevHeader title="설정" url="/mypage" />
      <SettingSection />
      <LogoutSection />
    </>
  )
}

export default SettingPage
