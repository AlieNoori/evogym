import { useEffect, useState } from 'react';

import { SelectedPage } from '@/shared/types';
import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';
import Benefits from '@/scenes/benefits';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
