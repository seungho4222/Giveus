import FullButton from '@/common/FullButton'
import { fundingDetailState } from '@/stores/funding'
import * as d from '@components/funding/DonateDone/DonateDone.styled'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import clap from '@assets/lottie/clap.json'
import Lottie from 'react-lottie'
import { userState } from '@stores/user'


const index = () => {
  const navigate = useNavigate()
  const fundingDetail = useRecoilValue(fundingDetailState)
  const userInfo = useRecoilValue(userState)

  const goFundingDetailPage = () =>
    navigate(`/funding/${fundingDetail.fundingNo}/detail-main`)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: clap,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <d.Container>
      <d.Top>
        <d.Title>후원 완료</d.Title>
        <Lottie options={defaultOptions} width={328} height={239} />
        <d.SubTitle>{userInfo.name}님의 따뜻한 마음이 전달되었습니다.</d.SubTitle>
      </d.Top>
      <d.Bottom>
        <d.Line />
        <d.Desc>
          <span> * 후원 내역은 마이페이지에서 확인 가능합니다.</span>
        </d.Desc>
        <FullButton
          text="확인"
          disabled={false}
          onClick={goFundingDetailPage}
        />
      </d.Bottom>
    </d.Container>
  )
}

export default index
