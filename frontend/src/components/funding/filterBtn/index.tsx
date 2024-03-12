import { fundingCondition } from '@/assets/data/fundingCondition'
import * as F from '@/components/funding/FilterBtn/FilterBtn.styled'

const Index = () => {
  return (
    <F.Container>
      {fundingCondition.map(item => (
        <F.Button key={item.name}>
          <F.Icon
            src={item.imgSrc}
            alt=""
            width={item.width}
            height={item.height}
          />
          <F.Label>{item.label}</F.Label>
        </F.Button>
      ))}
    </F.Container>
  )
}

export default Index
