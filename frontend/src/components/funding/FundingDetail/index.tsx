import * as D from '@/components/funding/FundingDetail/FundingDetail.styled'
import { FundingType } from '@/types/fundingType'
import FundingDetailCommon from './FundingDetailCommon'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Index = (props: { data: FundingType }) => {
  const { data } = props
  const [tap, setTap] = useState('detail-main')
  const navigate = useNavigate()

  const onClickHandler = (page: string) => {
    setTap(page)
    navigate(`/funding/${data.id}/${page}`)
  }

  return (
    <D.Container>
      <FundingDetailCommon data={data} />
      <D.Wrap>
        <D.Tap
          $active={tap === 'detail-main'}
          onClick={() => onClickHandler('detail-main')}
        >
          소개
        </D.Tap>
        <D.Tap
          $active={tap === 'donor-list'}
          onClick={() => onClickHandler('donor-list')}
        >
          기부자 명단
        </D.Tap>
        <D.Tap
          $active={tap === 'medical-expense'}
          onClick={() => onClickHandler('medical-expense')}
        >
          진료비 사용 내역
        </D.Tap>
      </D.Wrap>
      <Outlet />
    </D.Container>
  )
}

export default Index
