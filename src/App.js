import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";


function App() {
  document.body.style= 'background : #0b111e; color: whitesmoke'
  return (
    <div className="max-w-2xl w-full text-center rounded-xl min-h-screen mx-auto">
        <Navbar />
        <div className="snap-y scroll-smooth h-screen overflow-scroll snap-mandatory">
          <Home />
          <About />
          <Projects />
        </div>
    </div>
  );
}

export default App;
