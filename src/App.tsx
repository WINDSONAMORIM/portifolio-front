import { Hero } from "./features/Hero";
import "./App.css";
import { Projects } from "./features/projects";

function App() {
  return (
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-slate-950">
        <Hero />
        <Projects />
      </div>
  );
}

export default App