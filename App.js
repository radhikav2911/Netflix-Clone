import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import MovieRow from "./Components/MovieRow/MovieRow";
import { action, originals, trending, comedy, romantic } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MovieRow url={originals} title="Netflix originals" />
      <MovieRow url={trending} title="Trending Now" />
      <MovieRow url={romantic} title="Romantic" subField />
      <MovieRow url={comedy} title="Comedy" subField />
    </div>
  );
}

export default App;
