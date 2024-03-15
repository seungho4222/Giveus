import * as M from '@/components/funding/FundingDetail/MedicalExpense.styled'
import { medicalExpenseState } from '@/stores/fundingState'
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
    <M.Container>
      {medicalExpense.length ? (
        <M.ExpenseTrue>
          <M.TotalExpense>
            합계 {totalExpense().toLocaleString('ko-KR')}원
          </M.TotalExpense>
          {medicalExpense.map(item => (
            <M.Card key={item.id}>
              <M.Icon src="/icon/icon_document_blue.png" />
              <M.Wrap>
                <M.Category>{item.category}</M.Category>
                <M.SubWrap>
                  <M.Content>{item.content}</M.Content>
                  <M.Amount>{item.amount.toLocaleString('ko-KR')}원</M.Amount>
                </M.SubWrap>
              </M.Wrap>
            </M.Card>
          ))}
        </M.ExpenseTrue>
      ) : (
        <M.ExpenseFalse>등록된 진료비 사용 내역이 없습니다.</M.ExpenseFalse>
      )}
    </M.Container>
  )
}

export default MedicalExpense
