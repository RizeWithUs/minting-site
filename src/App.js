
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

import { useEffect, useState } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import MintNowModal from './components/Modal/MintNow';
import MinterCanvas from './components/Minter';
import StepSec from "./components/StepSection/StepSec";
import TutSec from "./components/TutSec/TutSec"

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };


  const handleOpen = () => {
    setIsOpen(true);
  };


  return (
    <>
      <Header />
      <MinterCanvas />
      <StepSec />
      <TutSec />
      {/* <Step /> */}
      <MintNowModal onClick={handleClose} isOpen={isOpen} />
      {/* <Section1 /> */}
      <Section2 />
      {/* <SectionBtn title="Mint Now" onClick={handleOpen} /> */}
      <Team />
      <Accordion />
      <Footer />
    </>
  );
}

export default App;