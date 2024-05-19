
import './App.css';

// import the components
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Accordion from './components/Accordion/Accordion';
import Team from './components/Team/Team';
import Section1 from './components/section1/Section1';
import Section2 from './components/Section2/Section2';

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Team />
      <Accordion />
      <Footer />
    </>
  );
}

export default App;
