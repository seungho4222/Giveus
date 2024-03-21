import { PointItemType } from '@/types/mypageType'
import { formatAmount } from '@utils/format'
import * as p from '@components/points/PointsList/PointsListItem.styled'

const PointsListItem = (props: { item: PointItemType }) => {
  const { createdAt, type, content, amount, total } = props.item

  const formattDate = () => {
    const date = new Date(createdAt)
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const result = month + '.' + day
    return result
  }

  return (
    <p.Container>
      <p.Left>
        <p.Date>{formattDate()}</p.Date>
        <p.ContentWrap>
          <p.Type>포인트 {type}</p.Type>
          <p.Content>{content}</p.Content>
        </p.ContentWrap>
      </p.Left>
      <p.AmountWrap>
        <p.Pay $type={type}>
          {type === '충전' ? '+' : '-'} {formatAmount(amount)}원
        </p.Pay>
        <p.Amount>{formatAmount(total)}원</p.Amount>
      </p.AmountWrap>
    </p.Container>
  )
}

export default PointsListItem
