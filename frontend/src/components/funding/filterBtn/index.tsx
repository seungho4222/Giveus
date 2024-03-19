import { fundingCondition } from '@/assets/data/fundingCondition'
import * as f from '@/components/funding/FilterBtn/FilterBtn.styled'

const Index = () => {
  return (
    <f.Container>
      {fundingCondition.map(item => (
        <f.Button key={item.name}>
          <f.Icon
            src={item.imgSrc}
            alt=""
            width={item.width}
            height={item.height}
          />
          <f.Label>{item.label}</f.Label>
        </f.Button>
      ))}
    </f.Container>
  )
}

export default Index
