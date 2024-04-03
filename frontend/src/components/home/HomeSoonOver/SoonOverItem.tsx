import { FundingType } from '@/types/fundingType'
import { formatAmount } from '@utils/format'
import * as s from '@components/home/HomeSoonOver/SoonOverItem.styled'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { themeState } from '@stores/theme'
import { prevUrlState } from '@/stores/funding'

const SoonOverItem = (props: { item: FundingType }) => {
  const theme = useRecoilValue(themeState)
  const { item } = props
  const navigate = useNavigate()
  const setPrevUrl = useSetRecoilState(prevUrlState)

  const goFundigDetail = () => {
    setPrevUrl('/funding')
    navigate(`/funding/${item.fundingNo}/detail-main`)
  }

  const flag: boolean = item.totalAmount === item.targetAmount

  return (
    <s.Container onClick={goFundigDetail}>
      <s.Image src={item.thumbnailUrl} alt="" />
      <s.InfoWrap $flag={flag}>
        {/* <span>{flag ? '후원 완료' : '후원 필요'}</span> */}
        <span>{flag ? '후원 완료' : item.endDate+' 종료'}</span>
        <s.Name>{item.title}</s.Name>
        <s.Amount $theme={theme}>
          {formatAmount(item.targetAmount)}원 달성
        </s.Amount>
      </s.InfoWrap>
      <s.Percent $flag={flag}>
        {Math.ceil((item.totalAmount / item.targetAmount) * 100)}%
      </s.Percent>
    </s.Container>
  )
}

export default SoonOverItem
