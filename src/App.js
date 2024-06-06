import ContactMe from "./components/contactMe";
import Experience from "./components/experience";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Outro from "./components/outro";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

function App() {
  return (
    <div className="bg-black p-2 border-[#574f3c] border-8">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Experience />
      {/* <Outro /> */}
      <ContactMe />
    </div>
  );
}

export default App;
// bg-[#34353a]