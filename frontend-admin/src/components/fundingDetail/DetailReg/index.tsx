import Modal from '@/common/Modal'
import * as d from '@/components/fundingDetail/DetailReg/DetailReg.styled'
import { fundingDetailState } from '@/store/funding'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import UsageReg from '@components/fundingDetail/UsageReg'

const index = () => {
  const fundingDetail = useRecoilValue(fundingDetailState)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <d.Container>
        <d.Title>{fundingDetail.title}</d.Title>
        <d.Wrap>
          <d.SubWrap>
            <d.Img
              src={
                fundingDetail.thumbnailUrl
                  ? fundingDetail.thumbnailUrl
                  : '/icon/icon_default_profile.png'
              }
            />
            <d.ButtonBox>
              <d.Button
                $isReview={true}
                $isDisabled={fundingDetail.isRegReview}
                disabled={fundingDetail.isRegReview}
              >
                {fundingDetail.isRegReview ? (
                  <>
                    후기 등록
                    <br />
                    완료
                  </>
                ) : (
                  '후기 등록'
                )}
              </d.Button>
              <d.Button
                $isReview={false}
                $isDisabled={fundingDetail.isRegUsage}
                disabled={fundingDetail.isRegUsage}
                onClick={() => setOpen(true)}
              >
                {fundingDetail.isRegUsage ? (
                  <>
                    기금 사용 내역
                    <br />
                    등록 완료
                  </>
                ) : (
                  <>
                    기금 사용 내역
                    <br />
                    등록
                  </>
                )}
              </d.Button>
            </d.ButtonBox>
          </d.SubWrap>
        </d.Wrap>
      </d.Container>
      {open && (
        <Modal name="기금 사용 내역 등록" onClose={() => setOpen(false)}>
          <UsageReg value={open} setValue={setOpen} />
        </Modal>
      )}
    </>
  )
}

export default index
