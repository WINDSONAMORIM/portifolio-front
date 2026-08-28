import "./App.css";
import { Hero } from "./features/hero";
import { Projects } from "./features/projects";
import { Experiences } from "./features/experiences";
import { SocialMedia } from "./features/socialMedia/socialMedia";

import { Sobre } from "./features/sobre";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-slate-950 overflow-x-hidden">
      <Hero />
      <Projects />
      <Experiences />
      <Sobre />     
      <SocialMedia />
    </div>
  );
}

export default App;
