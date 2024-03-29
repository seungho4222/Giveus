import * as m from '@components/mypage/MypageInfoSection/MypageInfoSection.styled'
import { useRecoilValue } from 'recoil'
import { userState } from '@stores/user'
import { themeState } from '@stores/theme'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const userInfo = useRecoilValue(userState)
  const theme = useRecoilValue(themeState)
  const navigate = useNavigate()

  const goLogin = () => navigate('/login')

  return (
    <m.Container>
      <m.Profile
        src={
          userInfo.memberNo !== -1
            ? userInfo.imageUrl
            : '/img/img_default_profile.png'
        }
        alt=""
      />
      <m.InfoWrap>
        <m.Name>
          {userInfo.memberNo !== -1 ? (
            userInfo.name
          ) : (
            <span onClick={goLogin}>
              로그인 필요{' '}
              <img
                src={
                  '/icon/icon_arrow_right' +
                  (theme ? '_black' : '_white') +
                  '.png'
                }
                alt=""
              />
            </span>
          )}
        </m.Name>
        <m.NickName $theme={theme}>
          {userInfo.memberNo !== -1
            ? userInfo.nickname
            : '원활한 서비스를 위해 로그인을 해주세요'}
        </m.NickName>
      </m.InfoWrap>
    </m.Container>
  )
}

export default Index
