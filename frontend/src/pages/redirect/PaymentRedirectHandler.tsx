import {
  kakaoPayDonateSuccess,
  kakaoPayPointSuccess,
  tossPayDonateSuccess,
  tossPayPointSuccess,
} from '@/apis/payment'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentRedirectHandler = () => {
  const urlPathname = window.location.pathname
  const urlParams = window.location.search

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (urlPathname.includes('recharge')) {
          if (urlPathname.includes('kakao')) {
            await kakaoPayPointSuccess(urlParams)
            navigate('/mypage/recharge/done')
          } else {
            await tossPayPointSuccess(urlParams)
            navigate('/mypage/recharge/done')
          }
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

  return (
    <div>
      <div>payment redirect page</div>
    </div>
  )
}

export default PaymentRedirectHandler
