import * as D from '@/components/funding/FundingDetail/DonerList.styled'
import { donerListState } from '@/recoil/fundingState'
import { colors } from '@/styles/theme'
import { useRecoilValue } from 'recoil'

const DonorList = () => {
  const donorList = useRecoilValue(donerListState)

  return (
    <D.Container>
      {donorList.length ? (
        <>
          <D.ListTrue>
            <span style={{ color: colors.orange01 }}>{donorList.length}</span>
            명이 기부에 참여했습니다.
          </D.ListTrue>
          {donorList.map(item => (
            <D.Card key={item.id}>
              <D.Wrap>
                <D.Date>{item.create_at}</D.Date>
                <D.Desc>기부금 기부</D.Desc>
              </D.Wrap>
              <D.Wrap>
                <D.SubWrap>
                  <D.Img />
                  <D.Nickname>{item.nickname}</D.Nickname>
                </D.SubWrap>
                <D.Amount>{item.amount.toLocaleString('ko-KR')}원</D.Amount>
              </D.Wrap>
            </D.Card>
          ))}
        </>
      ) : (
        <D.ListFalse>아직 기부에 참여한 사람이 없습니다.</D.ListFalse>
      )}
    </D.Container>
  )
}

export default DonorList
