import { fetchUserDonations } from '@/apis/funding'
import DonateFilter from '@/components/donate/DonateFilter'
import DonateFilterModal from '@/components/donate/DonateFilter/DonateFilterModal'
import DonateList from '@/components/donate/DonateList'
import DonateTotal from '@/components/donate/DonateTotal'
import MypagePrevHeader from '@/components/mypage/MypagePrevHeader'
import { userState } from '@/stores/user'
import * as d from '@pages/mypage/donate/DonatePage.styled'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'

const DonatePage = () => {
  const user = useRecoilValue(userState)
  const [open, setOpen] = useState(false)

  const { data } = useQuery({
    queryKey: ['fetchUserDonations'],
    queryFn: () => fetchUserDonations(user.memberNo),
  })

  return (
    <>
      <d.Container>
        <MypagePrevHeader title="후원 내역" url="/mypage" />
        <DonateTotal userDonations={data} />
        <DonateFilter setOpen={setOpen} />
        <DonateList userDonations={data} />
      </d.Container>
      {open && <DonateFilterModal value={open} setValue={setOpen} />}
    </>
  )
}

export default DonatePage
