import { useState } from 'react';
import RandomDog from './components/randomDog';

function App() {
  const [refresh, setRefresh] = useState(0);

  const handleRefresh = () => {
    setRefresh(prev => prev + 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <button onClick={handleRefresh} style={{ margin: '10px auto' }}>Rafraîchir</button>
      <div style={{ display: 'flex', justifyContent: 'space-around', flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <RandomDog key={refresh} />
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <RandomDog key={refresh + 1} />
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <RandomDog key={refresh + 2} />
        </div>
      </div>
    </div>
  );
}

export default App;
