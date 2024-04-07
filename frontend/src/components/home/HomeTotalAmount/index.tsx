import { themeState } from '@stores/theme'
import { formatAmount } from '@/utils/format'
import { fetchTotalDonateAmount } from '@apis/funding'
import * as h from '@components/home/HomeTotalAmount/HomeTotalAmount.styled'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'

const Index = () => {
  const { data } = useQuery<{ totalAmount: number }>({
    queryKey: ['fetchTotalDonateAmount'],
    queryFn: () => fetchTotalDonateAmount(),
  })

  const theme = useRecoilValue(themeState)

  return (
    <h.Container $theme={theme}>
      <h.Title>
        여러분의 마음을 모아
        <br />총 {data ? formatAmount(data.totalAmount) : '???'}원을 기부했어요!
      </h.Title>
      <h.Desc $theme={theme}>
        차곡차곡 모인 사랑으로 더 밝은 내일을 그려요
      </h.Desc>
      <img src="/icon/icon_donate.png" alt="" />
    </h.Container>
  )
}

export default Index
