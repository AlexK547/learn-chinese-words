import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/404NotFound";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Newhsk from "./components/newhsk/Newhsk";
import Level from "./components/level/Level";
import Training from "./components/traning/Training";

export default function App() {

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/newhsk" element={<Newhsk />}>
          <Route path="level1" element={<Level />}></Route>
        </Route>
        <Route path="/training" element={<Training />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}
