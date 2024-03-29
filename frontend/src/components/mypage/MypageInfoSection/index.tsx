import * as m from '@components/mypage/MypageInfoSection/MypageInfoSection.styled'
import MypageBasicInfo from '@components/mypage/MypageInfoSection/MypageBasicInfo'
import MypagePointSection from '@components/mypage/MypageInfoSection/MypagePointSection'
import { useRecoilValue } from 'recoil'
import { userState } from '@stores/user'

const Index = () => {
  const userInfo = useRecoilValue(userState)

  const isUser = userInfo.memberNo !== -1

  return (
    <m.Container>
      <m.Profile
        src={isUser ? userInfo.imageUrl : '/img/img_default_profile.png'}
        alt=""
      />
      <m.InfoWrap>
        <m.Name>{isUser ? userInfo.name : <span>로그인 필요</span>}</m.Name>
        <m.NickName>
          {isUser
            ? userInfo.nickname
            : '원활한 서비스를 위해 로그인을 해주세요'}
        </m.NickName>
      </m.InfoWrap>
    </m.Container>
    // <m.Container>
    //   <m.Wrap>
    //     <m.Nickname>{userInfo.nickname}님</m.Nickname>
    //     <MypageBasicInfo
    //       name={userInfo.name}
    //       profile={userInfo.imageUrl}
    //       email={userInfo.email}
    //     />
    //     <MypagePointSection />
    //   </m.Wrap>
    // </m.Container>
  )
}

export default Index
