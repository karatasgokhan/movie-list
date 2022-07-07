import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/main.css";

import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";
import TvDetail from "./pages/TvDetail";
import NotFoundPage from "./pages/TvDetail";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import * as ROUTES from "./constants/routePath";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.MOVIEDETAIL} element={<MovieDetail />} />
        <Route path={ROUTES.TVDETAIL} element={<TvDetail />} />
        <Route path={ROUTES.NOTFOUNDPAGE} element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
