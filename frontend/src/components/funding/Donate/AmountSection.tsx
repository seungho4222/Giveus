import * as a from '@/components/funding/Donate/AmountSection.styled'
import { DonateAmountSectionType } from '@/types/fundingType'
import { useState } from 'react'

const AmountSection = (props: DonateAmountSectionType) => {
  const { amount, setAmount, point, setPoint } = props
  const userPoint: number = 36000 // 더미데이터

  const cashList: number[] = [5000, 10000, 50000, 100000]
  const [targetCash, setTargetCash] = useState(5000)
  const onClickCash = (e: React.SyntheticEvent) => {
    const clickedValue = Number(e.currentTarget.innerHTML.replace(',', ''))
    setTargetCash(clickedValue)
    setAmount(prevValue => prevValue + clickedValue)
  }

  return (
    <a.Container>
      <a.SectionTitle>후원 금액</a.SectionTitle>
      <a.Input
        type="number"
        placeholder="금액 직접 입력하기"
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
        총 <a.Orange>{userPoint.toLocaleString('ko-KR')}P</a.Orange> 보유
      </a.SubDesc>
      <a.Wrap>
        <a.Input
          type="number"
          placeholder="0"
          value={point > 0 ? point : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPoint(Number(e.target.value))
          }
          max={userPoint}
        />
        <a.SmallButton>전액사용</a.SmallButton>
      </a.Wrap>
    </a.Container>
  )
}

export default AmountSection
