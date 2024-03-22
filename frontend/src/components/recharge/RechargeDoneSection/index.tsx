import FullButton from '@common/FullButton'
import * as r from '@components/recharge/RechargeDoneSection/RechargeDoneSection.styled'
import { useNavigate } from 'react-router'

const Index = () => {
  const navigate = useNavigate()

  const goPointsPage = () => navigate('/mypage/points')

  return (
    <r.Container>
      <r.Top>
        <r.Title>포인트 충전 완료</r.Title>
        <r.Icon src="/icon/icon_check_blue.png" alt="" />
        <r.SubTitle>포인트 충전이 정상적으로 처리되었습니다.</r.SubTitle>
      </r.Top>
      <r.Bottom>
        <r.Line />
        <r.Desc>
          <span>* 결제 취소는 가맹점에서 취소 요청을 해야합니다.</span>
          <span>* 보유 포인트는 마이페이지에서 확인 가능합니다.</span>
        </r.Desc>
        <FullButton text="확인" disabled={false} onClick={goPointsPage} />
      </r.Bottom>
    </r.Container>
  )
}

export default Index
