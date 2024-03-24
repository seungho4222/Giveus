import * as d from '@/components/funding/FundingDetail/DonerList.styled'
import { donerListState } from '@/stores/funding'
import { colors } from '@/styles/theme'
import { formatAmount } from '@/utils/format'
import { useRecoilValue } from 'recoil'

const DonorList = () => {
  const donorList = useRecoilValue(donerListState)

  return (
    <d.Container>
      {donorList.length ? (
        <>
          <d.ListTrue>
            <span style={{ color: colors.orange01 }}>{donorList.length}</span>
            명이 기부에 참여했습니다.
          </d.ListTrue>
          {donorList.map((item, idx) => (
            <d.Card key={idx}>
              <d.Wrap>
                <d.Date>{item.createdAt}</d.Date>
                <d.Desc>기부금 기부</d.Desc>
              </d.Wrap>
              <d.Wrap>
                <d.SubWrap>
                  <d.Img src={false ? '' : '/img/img_default_profile.png'} alt='profile' />
                  <d.Nickname>{item.name}</d.Nickname>
                </d.SubWrap>
                <d.Amount>{formatAmount(item.amount)}원</d.Amount>
              </d.Wrap>
            </d.Card>
          ))}
        </>
      ) : (
        <d.ListFalse>아직 기부에 참여한 사람이 없습니다.</d.ListFalse>
      )}
    </d.Container>
  )
}

export default DonorList
