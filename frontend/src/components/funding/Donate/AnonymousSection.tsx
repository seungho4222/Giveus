import * as a from '@components/funding/Donate/AnonymousSection.styled'
import { userState } from '@stores/user'
import { DonateAnonymousSectionType } from '@/types/donateType'
import { useRecoilValue } from 'recoil'
import { themeState } from '@stores/theme'

const AnonymousSection = (props: DonateAnonymousSectionType) => {
  const { isPublic, setIsPublic } = props
  const userInfo = useRecoilValue(userState)
  const theme = useRecoilValue(themeState)

  return (
    <a.Container $theme={theme}>
      <a.SectionTitle>공개 여부</a.SectionTitle>
      <a.Note>[이름] 상세페이지에 닉네임과 프로필 사진이 노출됩니다.</a.Note>
      <a.Note>
        [닉네임] 상세페이지에 {userInfo.nickname}(으)로 표시됩니다.
      </a.Note>
      <a.Wrap>
        <a.Button $active={isPublic === true} onClick={() => setIsPublic(true)}>
          <a.SubWrap>
            <a.RadioInput
              type="radio"
              name="isPublic"
              checked={isPublic === true}
              readOnly
            />
            이름 공개
          </a.SubWrap>
          <a.Img src={userInfo.imageUrl} alt="" />
          <a.Name>{userInfo.name}</a.Name>
        </a.Button>
        <a.Button
          $active={isPublic === false}
          onClick={() => setIsPublic(false)}
        >
          <a.SubWrap>
            <a.RadioInput
              type="radio"
              name="isPublic"
              checked={isPublic === false}
              readOnly
            />
            닉네임 공개
          </a.SubWrap>
          <a.Img src="/img/img_default_profile.png" alt="" />
          <a.Name>{userInfo.nickname}</a.Name>
        </a.Button>
      </a.Wrap>
    </a.Container>
  )
}

export default AnonymousSection
