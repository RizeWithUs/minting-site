import logo from './logo.svg';
import './App.css';

// import the components
import Header from './components/Header';
import Footer from './components/Footer';
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <>
      <Header />
      <Accordion />
      <Footer />
    </>
  );
}

export default App;
