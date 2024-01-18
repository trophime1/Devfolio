
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
import { useEffect } from 'react';
// import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const scrollWithHash =() => {
		if (window.location.hash) {
			if (document.querySelector(window.location.hash)) {
				let header = document.getElementById('header');
				let offset = header.offsetHeight;
				let elementPos = document.querySelector(window.location.hash).offsetTop;
				if (!header.classList.contains('header-scrolled')) {
					offset -= 10;
				}

				window.scrollTo({
					top: elementPos - offset,
					behavior: 'smooth'
				});
			}
		}
	}

	useEffect(() => {
		var c = Array.from(document.getElementsByTagName('a'));
		c.forEach((element) => {
			element.addEventListener('click', () => {
				window.scroll(0, 0);
			});
		});

		const script = document.createElement('script');
		script.src = "/assets/js/main.js";
		script.async = true;

		document.body.appendChild(script);
		scrollWithHash();

		return () => {
			document.body.removeChild(script);
		}
	}, []);
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
