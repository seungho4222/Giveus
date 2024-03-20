import * as p from '@components/points/PointsList/PointsListItem.styled'

const PointsListItem = () => {
  return (
    <p.Container>
      <p.Left>
        <p.Date>02.09</p.Date>
        <p.ContentWrap>
          <p.Type>포인트 충전</p.Type>
          <p.Content>정기 결제</p.Content>
        </p.ContentWrap>
      </p.Left>
      <p.AmountWrap>
        <p.Pay>+ 50,000원</p.Pay>
        <p.Amount>20,000원</p.Amount>
      </p.AmountWrap>
    </p.Container>
  )
}

export default PointsListItem
