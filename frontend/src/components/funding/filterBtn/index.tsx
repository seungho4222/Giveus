import { fundingCondition } from '@/assets/data/fundingCondition';
import * as F from '@/components/funding/filterBtn/FilterBtn.styled'

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
          {item.label}
        </F.Button>
      ))}
   </F.Container>
  );
};

export default Index;