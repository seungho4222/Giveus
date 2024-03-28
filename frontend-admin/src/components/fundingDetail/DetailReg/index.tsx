import * as d from '@/components/fundingDetail/DetailReg/DetailReg.styled'
import { fundingDetailState } from '@/store/funding'
import { useRecoilValue } from 'recoil'

const index = () => {
  const fundingDetail = useRecoilValue(fundingDetailState)

  return (
    <d.Container>
      <d.Title>{fundingDetail.title}</d.Title>
      <d.Wrap>
        <d.SubWrap>
          <d.Img src={fundingDetail.thumbnailUrl ? fundingDetail.thumbnailUrl : "/icon/icon_default_profile.png"} />
          <d.ButtonBox>
            <d.Button
              $isReview={true}
              $isDisabled={fundingDetail.isRegReview}
              disabled={fundingDetail.isRegReview}
            >
              후기 등록
            </d.Button>
            <d.Button
              $isReview={false}
              $isDisabled={fundingDetail.isRegUsage}
              disabled={fundingDetail.isRegUsage}
            >
              기금 사용 내역 등록
            </d.Button>
          </d.ButtonBox>
        </d.SubWrap>
      </d.Wrap>
    </d.Container>
  )
}

export default index
