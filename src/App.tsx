import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { FavouritesPage } from "./pages/FavouritesPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
