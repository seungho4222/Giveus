import { FundingType } from '@/types/fundingType'
import { formatAmount } from '@utils/format'
import * as s from '@components/home/HomeSoonOver/SoonOverItem.styled'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { themeState } from '@stores/theme'

const SoonOverItem = (props: { item: FundingType }) => {
  const theme = useRecoilValue(themeState)
  const { item } = props
  const navigate = useNavigate()

  const goFundigDetail = () =>
    navigate(`/funding/${item.fundingNo}/detail-main`)

  const flag: boolean = item.totalAmount === item.targetAmount

  return (
    <s.Container onClick={goFundigDetail}>
      <s.Image src={item.thumbnailUrl} alt="" />
      <s.InfoWrap $flag={flag}>
        <span>{flag ? '모금 완료' : '모금 필요'}</span>
        <s.Name>{item.title}</s.Name>
        <s.Amount $theme={theme}>
          모금액 {formatAmount(item.targetAmount)}원
        </s.Amount>
      </s.InfoWrap>
      <s.Percent $flag={flag}>
        {Math.ceil((item.totalAmount / item.targetAmount) * 100)}%
      </s.Percent>
    </s.Container>
  )
}

export default SoonOverItem
