import * as D from '@/components/funding/FundingDetail/FundingDetail.styled'
import { FundingType } from '@/types/fundingType'
import FundingDetailCommon from './FundingDetailCommon'
import { useState } from 'react'
import DetailMain from './DetailMain'
import DonorList from './DonorList'
import MedicalExpense from './MedicalExpense'

const Index = (props: { data: FundingType }) => {
  const { data } = props
  const [tap, setTap] = useState('detailMain')

  const tapSection = () => {
    switch (tap) {
      case 'detailMain':
        return <DetailMain data={data} />
      case 'donorList':
        return <DonorList />
      case 'medicalExpense':
        return <MedicalExpense />
    }
  }

  return (
    <D.Container>
      <FundingDetailCommon data={data} />
      <D.Wrap>
        <D.Tap $active={tap === 'detailMain'} onClick={() =>setTap("detailMain")}>소개</D.Tap>
        <D.Tap $active={tap === 'donorList'} onClick={() =>setTap("donorList")}>기부자 명단</D.Tap>
        <D.Tap $active={tap === 'medicalExpense'} onClick={() =>setTap("medicalExpense")}>진료비 사용 내역</D.Tap>
      </D.Wrap>
      {tapSection()}
    </D.Container>
  )
}

export default Index
