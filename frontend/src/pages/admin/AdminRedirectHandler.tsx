import { BASE_URL } from '@utils/requestMethods'
import { useEffect } from 'react'

const AdminRedirectHandler = () => {
  useEffect(() => {
    window.location.href = `${BASE_URL}/admin${
      window.location.href.split('/admin')[1]
    }`
  }, [])

  return <div>redirect</div>
}

export default AdminRedirectHandler
