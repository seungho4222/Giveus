import * as d from '@/components/fundingDetail/DetailReg/DetailReg.styled'

const index = () => {
  return (
    <d.Container>
      <d.Title>장염(3세)입니다</d.Title>
      <d.Wrap>
        <d.SubWrap>
          <d.Img src="https://picsum.photos/200/200" />
          <d.ButtonBox>
            <d.Button $isReview={true} $isDisabled={true} disabled={true}>
              후기 등록
            </d.Button>
            <d.Button $isReview={false} $isDisabled={false} disabled={false}>
              기금 사용 내역 등록
            </d.Button>
          </d.ButtonBox>
        </d.SubWrap>
      </d.Wrap>
    </d.Container>
  )
}

export default index
