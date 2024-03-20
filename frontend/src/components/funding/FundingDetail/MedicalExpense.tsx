import * as m from '@/components/funding/FundingDetail/MedicalExpense.styled'
import { medicalExpenseState } from '@/stores/funding'
import { MedicalExpenseType } from '@/types/fundingType'
import { useRecoilValue } from 'recoil'

const MedicalExpense = () => {
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
          <m.TotalExpense>
            합계 {totalExpense().toLocaleString('ko-KR')}원
          </m.TotalExpense>
          {medicalExpense.map(item => (
            <m.Card key={item.usageHistoryNo}>
              <m.Icon src="/icon/icon_document_blue.png" />
              <m.Wrap>
                <m.Category>{item.category}</m.Category>
                <m.SubWrap>
                  <m.Content>{item.content}</m.Content>
                  <m.Amount>{item.amount.toLocaleString('ko-KR')}원</m.Amount>
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
