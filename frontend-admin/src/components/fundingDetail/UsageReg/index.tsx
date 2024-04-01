import * as u from '@/components/fundingDetail/UsageReg/UsageReg.styled'
import { useState } from 'react'
import { UsageDataType } from '@/types/fundingType'
import { useRecoilValue } from 'recoil'
import { selectedFundingNoState } from '@/store/funding'
import UsageInput from './UsageInput'
import { useMutation } from '@tanstack/react-query'
import { createFundingUsage } from '@/apis/funding'
import { BooleanStateType } from '@/types/commonType'
import DetailFile from '@components/fundingDetail/DetailFile'
import { OCRResult, RegDataType } from '@/types/fundingType'

const Index = (props: BooleanStateType) => {
  const { value, setValue } = props
  const selectedFundingNo = useRecoilValue(selectedFundingNoState)
  const [regData, setRegData] = useState<UsageDataType>({
    fundingNo: selectedFundingNo,
    category: '',
    content: '',
    amount: 0,
    count: 0,
  })

  const { mutate } = useMutation({
    mutationKey: ['createFundingUsage'],
    mutationFn: createFundingUsage,
    onSuccess(result) {
      console.log('등록 성공', result)
      alert('기금 사용 내역을 성공적으로 등록하였습니다.')
      setValue(false)
    },
    onError(error) {
      console.error('등록 실패:', error)
      alert('기금 사용 내역 등록에 실패하였습니다.내용을 다시 확인해주세요.')
    },
  })

  const handleOCRResult = (results: OCRResult[]) => {
    if (results) {
      console.log('결과 받았어', results)
    }
  }

  const handleCreateFundingUsage = async () => {
    mutate(regData)
  }

  return (
    <u.Container>
      <DetailFile onOCRResult={handleOCRResult} />
      <UsageInput
        id="category"
        label="검사 종목"
        placeholder="검사 종목을 입력해주세요"
        value={regData.category}
        setValue={setRegData}
      />
      <UsageInput
        id="content"
        label="검사 내용"
        placeholder="검사 내용을 입력해주세요"
        value={regData.content}
        setValue={setRegData}
      />
      <UsageInput
        id="count"
        label="검사 횟수"
        placeholder="검사 횟수을 입력해주세요"
        value={regData.count}
        setValue={setRegData}
      />
      <UsageInput
        id="amount"
        label="검사 비용"
        placeholder="검사 비용을 입력해주세요"
        value={regData.amount}
        setValue={setRegData}
      />
      <u.Wrap>
        <u.Button onClick={() => handleCreateFundingUsage()}>
          기금 사용 내역 등록
        </u.Button>
      </u.Wrap>
    </u.Container>
  )
}

export default Index
