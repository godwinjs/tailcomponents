import './App.css';
import Features from './components/sections/features';
import Hero from './components/sections/hero'
import CTA from './components/sections/cta'
import Centered2x2 from './components/sections/features/centered2x2'
import CenteredBB from './components/elements/headers';


function App() {
  return (
    <>
      <Hero />
      <Features />
      <Centered2x2 />
      <CTA />
      <CenteredBB />
    </>
  );
}

export default App;
