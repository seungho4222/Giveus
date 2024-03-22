import FundingListCard from '@/components/funding/FundingListCard'
import { filteredMyDonateListState, myDonateListState } from '@/stores/donate'
import { DonatedFundingListType, DonatedFundingType } from '@/types/mypageType'
import * as d from '@components/donate/DonateList/DonateList.styled'
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const Index = (props: DonatedFundingListType) => {
  const { donatedFunding } = props
  const setMyDonateList = useSetRecoilState(myDonateListState)
  const filteredMyDonateList = useRecoilValue(filteredMyDonateListState)

  useEffect(() => {
    setDataForm()
  }, [donatedFunding])

  const setDataForm = async () => {
    let items: DonatedFundingType[] = [...donatedFunding]

    items.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )

    setMyDonateList(items)
  }

  return (
    <d.Container>
      <d.Text>총 {filteredMyDonateList.length}건</d.Text>
      {filteredMyDonateList.map((item, idx) => {
        const newItem: any = item
        return <FundingListCard key={idx} data={newItem} />
      })}
    </d.Container>
  )
}

export default Index
