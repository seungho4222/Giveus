import * as d from '@/components/funding/FundingDetail/FundingDetail.styled'
import { FundingType } from '@/types/fundingType'
import FundingDetailCommon from './FundingDetailCommon'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { themeState } from '@stores/theme'

const Index = (props: { data: FundingType }) => {
  const theme = useRecoilValue(themeState)
  const { data } = props
  const [tap, setTap] = useState('detail-main')
  const navigate = useNavigate()

  const onClickHandler = (page: string) => {
    setTap(page)
    navigate(`/funding/${data.fundingNo}/${page}`)
  }

  return (
    <d.Container>
      <FundingDetailCommon data={data} />
      <d.Wrap>
        <d.Tap
          $active={tap === 'detail-main'}
          $theme={theme}
          onClick={() => onClickHandler('detail-main')}
        >
          소개
        </d.Tap>
        <d.Tap
          $active={tap === 'donor-list'}
          $theme={theme}
          onClick={() => onClickHandler('donor-list')}
        >
          기부자 명단
        </d.Tap>
        <d.Tap
          $active={tap === 'medical-expense'}
          $theme={theme}
          onClick={() => onClickHandler('medical-expense')}
        >
          진료비 사용 내역
        </d.Tap>
      </d.Wrap>
      <Outlet />
    </d.Container>
  )
}

export default Index
