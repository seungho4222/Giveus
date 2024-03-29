import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentRedirectHandler = () => {
  const url = window.location.pathname
  const navigate = useNavigate()

  useEffect(() => {
    if (url.includes('donate')) {
      navigate('/funding/donate/done')
    } else navigate('/mypage/recharge/done')
  }, [url])

  return (
    <div>
      <div>payment redirect page</div>
    </div>
  )
}

export default PaymentRedirectHandler
