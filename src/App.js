
import './App.css';
import Header from './pages/header';
import Hello from './pages/hero';
import About from './pages/about';
import Services from './pages/services';
import Counter from './pages/counter';
import Potifolio from './pages/potifolio';
import Testimony from './pages/testimony';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Footer from './pages/footer';
import './public/assets/js/main'
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <>

    <Header />
    <Hello />
    <About />
    <Services />
    <Counter />
    <Potifolio />
    <Testimony />
    <Blog />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
