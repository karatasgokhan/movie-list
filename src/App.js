import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/main.css";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFoundPage from "./pages/NotFoundPage";

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
        <Route path={ROUTES.MOVIEDETAIL} element={<Detail />} />
        <Route path={ROUTES.TVDETAIL} element={<Detail />} />
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
