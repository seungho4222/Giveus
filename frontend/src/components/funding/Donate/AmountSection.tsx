import { fetchMemberPoints } from '@apis/payment'
import * as a from '@components/funding/Donate/AmountSection.styled'
import { myPointState } from '@stores/point'
import { themeState } from '@stores/theme'
import { userState } from '@stores/user'
import { DonateAmountSectionType } from '@/types/donateType'
import { PointsListType } from '@/types/mypageType'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

const AmountSection = (props: DonateAmountSectionType) => {
  const { amount, setAmount, point, setPoint } = props
  const userInfo = useRecoilValue(userState)
  const [myPoint, setMyPoint] = useRecoilState(myPointState)
  const theme = useRecoilValue(themeState)

  const cashList: number[] = [5000, 10000, 50000, 100000]
  const [targetCash, setTargetCash] = useState(5000)

  const onClickCash = (e: React.SyntheticEvent) => {
    const clickedValue = Number(e.currentTarget.innerHTML.replace(',', ''))
    setTargetCash(clickedValue)
    setAmount(prevValue => prevValue + clickedValue)
  }

  const { data } = useQuery<PointsListType>({
    queryKey: ['fetchMemberPoints'],
    queryFn: () => fetchMemberPoints(userInfo.memberNo),
  })

  useEffect(() => {
    caculateMyPoint()
  }, [data])

  // 내 포인트 계산
  const caculateMyPoint = () => {
    setMyPoint(0)
    data &&
      data.rechargeList.forEach(item => {
        setMyPoint(old => old + item.amount)
      })
    data &&
      data.usageList.forEach(item => {
        setMyPoint(old => old - item.amount)
      })
  }

  return (
    <a.Container $theme={theme}>
      <a.SectionTitle>후원 금액</a.SectionTitle>
      <a.Input
        type="number"
        placeholder="금액 직접 입력하기"
        $theme={theme}
        value={amount > 0 ? amount : ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAmount(Number(e.target.value))
        }
      />
      <a.Wrap>
        <a.Button onClick={onClickCash} $active={targetCash === cashList[0]}>
          {cashList[0].toLocaleString('ko-KR')}
        </a.Button>
        <a.Button onClick={onClickCash} $active={targetCash === cashList[1]}>
          {cashList[1].toLocaleString('ko-KR')}
        </a.Button>
        <a.Button onClick={onClickCash} $active={targetCash === cashList[2]}>
          {cashList[2].toLocaleString('ko-KR')}
        </a.Button>
        <a.Button onClick={onClickCash} $active={targetCash === cashList[3]}>
          {cashList[3].toLocaleString('ko-KR')}
        </a.Button>
      </a.Wrap>
      <a.Desc>보유 포인트 사용</a.Desc>
      <a.SubDesc>
        총 <a.Orange>{myPoint.toLocaleString('ko-KR')}P</a.Orange> 보유
      </a.SubDesc>
      <a.Wrap>
        <a.Input
          type="number"
          placeholder="0"
          $theme={theme}
          value={point > 0 ? point : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = Number(e.target.value)
            if (inputValue > myPoint) {
              setPoint(myPoint)
              alert('사용 가능한 포인트를 초과하였습니다.')
            } else {
              setPoint(inputValue)
            }
          }}
        />
        <a.SmallButton onClick={() => setPoint(myPoint)}>
          전액사용
        </a.SmallButton>
      </a.Wrap>
    </a.Container>
  )
}

export default AmountSection
