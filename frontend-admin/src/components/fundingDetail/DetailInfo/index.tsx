import * as d from '@/components/fundingDetail/DetailInfo/DetailInfo.styled'

const Value = (name: string, value: string) => {
  return (
    <d.Wrap>
      <d.Text>{name}</d.Text>
      <d.Text>{value}</d.Text>
    </d.Wrap>
  )
}

const index = () => {
  return (
    <d.Container>
      <d.Row>
        {Value('발행번호', 'test')}
        {Value('환자번호', 'test')}
      </d.Row>
      <d.Row>
        {Value('환자성명', 'test')}
        {Value('생년월일', 'test')}
      </d.Row>
      <d.Row>
        {Value('질병명', 'test')}
        {Value('병명코드', 'test')}
      </d.Row>
      <d.Row>
        {Value('진단일', 'test')}
        {Value('펀딩상태', 'test')}
      </d.Row>
      <d.Row>{Value('치료내용', 'test')}</d.Row>
      <d.Row>
        {Value('펀딩 목표 금액', 'test')}
        {Value('펀딩 종료일', 'test')}
      </d.Row>
    </d.Container>
  )
}

export default index
