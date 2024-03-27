import * as c from '@components/home/HomeContributors/ContributorInfo.styled'

const ContributorInfo = () => {
  return (
    <c.Container>
      <c.Profile src="/img/img_data.png" alt="" />
      <c.InfoWrap>
        <b>익명의 쿼카</b>
        <div>500,000원</div>
      </c.InfoWrap>
      <c.DateWrap>
        <div>2024-03-23</div>
        <div>방금전</div>
      </c.DateWrap>
    </c.Container>
  )
}

export default ContributorInfo
