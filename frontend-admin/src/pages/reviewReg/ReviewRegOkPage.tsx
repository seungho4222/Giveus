import * as r from '@pages/reviewReg/ReviewRegOkPage.styled'
import Lottie from 'react-lottie';
import clap from '@assets/lottie/clap.json'
import { useNavigate } from 'react-router-dom';
import FullButton from '@/common/Fullbutton'

const ReviewRegOkPage = () => {
  const navigate = useNavigate()
  const goMainPage = () => navigate('/', { replace: true })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: clap,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <r.Container>
      <r.Top>
        <r.Title>펀딩 등록 완료</r.Title>
        <Lottie options={defaultOptions} width={328} height={239} />
        <r.SubTitle>펀딩이 정상적으로 등록되었습니다.</r.SubTitle>
      </r.Top>
      <r.Bottom>
        <r.Line />
        <r.Desc>
          <span>* 등록된 펀딩은 GIVEUS 어플에서 확인가능합니다.</span>
          <span>* 문의사항은 GIVEUS에 문의해주세요.</span>
        </r.Desc>
        <FullButton text="확인" disabled={false} onClick={goMainPage} />
      </r.Bottom>
    </r.Container>
  )
}

export default ReviewRegOkPage;