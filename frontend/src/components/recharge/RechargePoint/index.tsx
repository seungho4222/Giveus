import * as r from '@/components/recharge/RechargePoint/RechargePoint.styled'

const Index = () => {
  return (
    <r.Container>
      <r.Title>충전할 포인트</r.Title>
      <r.ButtonWrap>
        <r.Button>5,000</r.Button>
        <r.Button>10,000</r.Button>
        <r.Button>20,000</r.Button>
        <r.Button>50,000</r.Button>
        <r.Button>100,000</r.Button>
        <r.Button>200,000</r.Button>
        <r.Button>500,000</r.Button>
        <r.Button>직접입력</r.Button>
      </r.ButtonWrap>
      <r.Input />
      <r.Label>충전할 금액 70,000원</r.Label>
    </r.Container>
  )
}

export default Index
