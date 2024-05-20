
import './App.css';

// import the components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Accordion from './components/Accordion/Accordion';
import Team from './components/Team/Team';
import Section1 from './components/section1/Section1';
import Section2 from './components/Section2/Section2';
import SectionBtn from './components/Button/SectionBtn';
import Step from './components/Step/Step';

import { useEffect } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';

function App() {

  return (
    <>
      <Header />
      {/* <Step /> */}
      <Section1 />
      <Section2 />
      <SectionBtn title="Mint Now" />
      <Team />
      <Accordion />
      <Footer />
    </>
  );
}

export default App;
