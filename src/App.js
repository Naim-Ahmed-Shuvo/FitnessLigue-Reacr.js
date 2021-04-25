import About from "./components/About";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Team from "./components/Team";
import Contact from './components/Contact';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="">
      <Nav/>
      <main>
        <Header/>
        <About/>
        <Team/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
