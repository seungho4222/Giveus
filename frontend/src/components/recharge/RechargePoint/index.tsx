import { rechargeList } from '@assets/data/rechargeList'
import * as r from '@components/recharge/RechargePoint/RechargePoint.styled'
import { StringStateType } from '@/types/commonType'
import { formatAmount } from '@utils/format'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { themeState } from '@stores/theme'

const Index = (props: StringStateType) => {
  const { value, setValue } = props
  const theme = useRecoilValue(themeState)

  const [readOnly, setReadOnly] = useState<boolean>(false)
  const [active, setActive] = useState<string>('직접입력')

  const setAmount = (v: string) => {
    setActive(v)
    if (v === '직접입력') {
      setReadOnly(false)
      return
    }
    setReadOnly(true)
    setValue(v)
  }

  return (
    <r.Container>
      <r.Title>충전할 포인트</r.Title>
      <r.ButtonWrap>
        {rechargeList.map(v => (
          <r.Button
            $active={active === v}
            $theme={theme}
            onClick={() => setAmount(v)}
            key={v}
          >
            {v === '직접입력' ? v : formatAmount(Number(v))}
          </r.Button>
        ))}
      </r.ButtonWrap>
      <r.Input
        type="number"
        value={value}
        $theme={theme}
        readOnly={readOnly}
        onChange={e => setValue(e.target.value)}
      />
      <r.Label>충전할 금액 {formatAmount(Number(value))}원</r.Label>
    </r.Container>
  )
}

export default Index
