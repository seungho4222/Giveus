import { useState } from 'react';
import Test from '@components/Test';
import Router from './router/router';
function App() {
  const [count, setCount] = useState(0);

  return (
      <>
      {/* <Router/> */}
      <Test />
      
      </>

  );
}

export default App;
