import * as m from '@components/funding/FundingDetail/MedicalExpense.styled'
import { medicalExpenseState } from '@stores/funding'
import { themeState } from '@stores/theme'
import { MedicalExpenseType } from '@/types/fundingType'
import { formatAmount } from '@utils/format'
import { useRecoilValue } from 'recoil'

const MedicalExpense = () => {
  const theme = useRecoilValue(themeState)
  const medicalExpense = useRecoilValue(medicalExpenseState)

  const totalExpense = () => {
    return medicalExpense.reduce(
      (acc: number, cur: MedicalExpenseType) => acc + cur.amount,
      0,
    )
  }

  return (
    <m.Container>
      {medicalExpense.length ? (
        <m.ExpenseTrue>
          <m.TotalExpense>합계 {formatAmount(totalExpense())}원</m.TotalExpense>
          {medicalExpense.map(item => (
            <m.Card key={item.usageHistoryNo} $theme={theme}>
              <m.Icon src="/icon/icon_document_blue.png" />
              <m.Wrap>
                <m.Category>{item.category}</m.Category>
                <m.SubWrap>
                  <m.Content>{item.content}</m.Content>
                  <m.Amount>{formatAmount(item.amount)}원</m.Amount>
                </m.SubWrap>
              </m.Wrap>
            </m.Card>
          ))}
        </m.ExpenseTrue>
      ) : (
        <m.ExpenseFalse>등록된 진료비 사용 내역이 없습니다.</m.ExpenseFalse>
      )}
    </m.Container>
  )
}

export default MedicalExpense
