import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  return (
    <>
      <NavBar />
      {/* <DaisyNav /> */}
      <h1 className="text-7xl bg-rose-600">Vite + React</h1>
      <PriceOptions />
    </>
  );
}

export default App;
