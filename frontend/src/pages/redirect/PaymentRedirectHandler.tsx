import {
  kakaoPayDonateSuccess,
  kakaoPayRechargeSuccess,
  tossPayDonateSuccess,
  tossPayRechargeSuccess,
} from '@/apis/payment'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as p from '@pages/redirect/PaymentRedirectHandler.styled'

const PaymentRedirectHandler = () => {
  const urlPathname = window.location.pathname
  const urlParams = window.location.search

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (urlPathname.includes('recharge')) {
          if (urlPathname.includes('kakao')) {
            await kakaoPayRechargeSuccess(urlParams)
          } else {
            await tossPayRechargeSuccess(urlParams)
          }
          navigate('/mypage/recharge/done')
        } else {
          if (urlPathname.includes('kakao')) {
            await kakaoPayDonateSuccess(urlParams)
          } else {
            await tossPayDonateSuccess(urlParams)
          }
          navigate('/funding/donate/done')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [urlPathname, navigate, urlParams])

  return <p.Container />
}

export default PaymentRedirectHandler
