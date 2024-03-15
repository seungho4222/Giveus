import { MypageInfoSectionType } from '@/types/authType'
import * as m from '@components/mypage/MypageInfoSection/MypageBasicInfo.styled'

const MypageBasicInfo = (props: MypageInfoSectionType) => {
  const { email, profile, name } = props

  return (
    <m.Container>
      <img src={profile} alt="" />
      <m.Wrap>
        <m.Name>{name}</m.Name>
        <m.Email>{email}</m.Email>
      </m.Wrap>
    </m.Container>
  )
}

export default MypageBasicInfo
