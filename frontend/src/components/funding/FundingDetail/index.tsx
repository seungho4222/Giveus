import * as D from '@/components/funding/FundingDetail/FundingDetail.styled'
import { FundingType } from '@/types/fundingType'
import FundingDetailCommon from './FundingDetailCommon'
import { useState } from 'react'

const Index = (props: { data: FundingType }) => {
  const { data } = props
  const [tap, setTap] = useState('main')

  return (
    <D.Container>
      <FundingDetailCommon data={data} />
      <D.Wrap>
        <D.Tap $active={tap === 'main'} onClick={() =>setTap("main")}>소개하기</D.Tap>
        <D.Tap $active={tap === 'list'} onClick={() =>setTap("list")}>기부자 명단</D.Tap>
        <D.Tap $active={tap === 'medical'} onClick={() =>setTap("medical")}>진료비 사용 내역</D.Tap>
      </D.Wrap>
    </D.Container>
  )
}

export default Index
