import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/main.css";

import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";
import TvDetail from "./pages/TvDetail";
import NotFoundPage from "./pages/TvDetail";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import DefaultLayout from "./layout/DefaultLayout";

import * as ROUTES from "./constants/routePath";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path={ROUTES.MOVIEDETAIL}
          element={
            <DefaultLayout>
              <MovieDetail />
            </DefaultLayout>
          }
        />
        <Route
          path={ROUTES.TVDETAIL}
          element={
            <DefaultLayout>
              <TvDetail />
            </DefaultLayout>
          }
        />
        <Route
          path={ROUTES.NOTFOUNDPAGE}
          element={
            <DefaultLayout>
              <NotFoundPage />
            </DefaultLayout>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
