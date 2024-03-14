import * as a from '@/components/funding/Donate/AmountSection.styled'
import { useState } from 'react';


const AmountSection = () => {
  const [value, setValue] = useState('');

  return (
    <a.Container>
      <a.SectionTitle>후원 금액</a.SectionTitle>
      <a.Input
          placeholder="금액 직접 입력하기"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />

    </a.Container>
  );
};

export default AmountSection;