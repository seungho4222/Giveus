import { filteredMyDonateListState, myDonateListState } from '@/stores/donate'
import { UserDonationsType } from '@/types/fundingType'
import * as d from '@components/donate/DonateList/DonateList.styled'
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import DonateListCard from './DonateListCard'

const Index = (props: { userDonations: UserDonationsType[]}) => {
  const { userDonations } = props
  const setMyDonateList = useSetRecoilState(myDonateListState)
  const filteredMyDonateList = useRecoilValue(filteredMyDonateListState)

  useEffect(() => {
    setDataForm()
  }, [userDonations])

  const setDataForm = async () => {
    let items: UserDonationsType[] = [...userDonations]

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
        return <DonateListCard key={idx} data={item} />
      })}
    </d.Container>
  )
}

export default Index
