import * as h from '@components/home/HomeContributors/HomeContributors.styled'
import ContributorInfo from '@components/home/HomeContributors/ContributorInfo'

const Index = () => {
  return (
    <h.Container>
      <h.Title>실시간 기부 참여자</h.Title>
      <h.Wrap>
        <ContributorInfo />
        <ContributorInfo />
        <ContributorInfo />
        <h.Line />
        <h.Button>
          지금 바로 기부 참여하기
          <img src="/icon/icon_arrow_right_gray.png" alt="" />
        </h.Button>
      </h.Wrap>
    </h.Container>
  )
}

export default Index
