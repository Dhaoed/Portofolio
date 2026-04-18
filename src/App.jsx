import React, { useState } from 'react'; 
import { About } from '@/sections/About';
import { Education } from '@/sections/Education';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Skills } from '@/sections/Skills';
import { Navbar } from '@/layout/Navbar';
import { Footer } from '@/layout/Footer';

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <main>
        <Navbar onNavClick={() => setShowMore(true)} />
        <About onShowProjects={() => setShowMore(true)} />
        <Education />
        <Experience onShowProjects={() => setShowMore(true)} />
        {showMore && ( <><Projects /><Skills /></>)}
      </main>
      <Footer/>
    </div>
  );
}

export default App;