import DonateFilter from '@/components/donate/DonateFilter'
import DonateFilterModal from '@/components/donate/DonateFilter/DonateFilterModal'
import DonateList from '@/components/donate/DonateList'
import DonateTotal from '@/components/donate/DonateTotal'
import { donatedFundingData } from '@/components/donate/data'
import MypagePrevHeader from '@/components/mypage/MypagePrevHeader'
import * as d from '@pages/mypage/donate/DonatePage.styled'
import { useState } from 'react'

const DonatePage = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <d.Container>
        <MypagePrevHeader title="후원 내역" url="/mypage" />
        <DonateTotal donatedFunding={donatedFundingData} />
        <DonateFilter setOpen={setOpen} />
        <DonateList donatedFunding={donatedFundingData} />
      </d.Container>
      {open && <DonateFilterModal value={open} setValue={setOpen} />}
    </>
  )
}

export default DonatePage
