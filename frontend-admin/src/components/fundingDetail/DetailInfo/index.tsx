import * as d from '@/components/fundingDetail/DetailInfo/DetailInfo.styled'
import { fundingDetailState } from '@/store/funding'
import { useRecoilValue } from 'recoil'

const Value = (name: string, value: any) => {
  return (
    <d.Wrap>
      <d.Text>{name}</d.Text>
      <d.Text>{value}</d.Text>
    </d.Wrap>
  )
}

const index = () => {
  const fundingDetail = useRecoilValue(fundingDetailState)

  return (
    <d.Container>
      <d.Row>
        {Value('발행번호', fundingDetail.issueNumber)}
        {Value('환자번호', fundingDetail.registrationNumber)}
      </d.Row>
      <d.Row>
        {Value('환자성명', fundingDetail.patientName)}
        {Value('생년월일', fundingDetail.birth)}
      </d.Row>
      <d.Row>
        {Value('질병명', fundingDetail.diseaseName)}
        {Value('병명코드', fundingDetail.diseaseCode)}
      </d.Row>
      <d.Row>
        {Value('진단일', fundingDetail.diagnosisDate)}
        {Value('펀딩상태', fundingDetail.status)}
      </d.Row>
      <d.Row>{Value('치료내용', fundingDetail.opinion)}</d.Row>
      <d.Row>
        {Value('펀딩 목표 금액', fundingDetail.targetAmount)}
        {Value('펀딩 종료일', fundingDetail.endDate)}
      </d.Row>
    </d.Container>
  )
}

export default index
