import * as f from '@/components/funding/FundingListCard/FundingListBox.styled'

const FundingListBox = ({ children }: { children: React.ReactNode }) => {
  return <f.Container>{children}</f.Container>
}

export default FundingListBox
