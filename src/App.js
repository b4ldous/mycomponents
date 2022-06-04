import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fifth from "./pages/Fifth";
import First from "./pages/First";
import Fourth from "./pages/Fourth";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Second from "./pages/Second";
import Sixth from "./pages/Sixth";
import Third from "./pages/Third";
import ResponsiveDrawer from "./ResponsiveDrawer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResponsiveDrawer />}>
            <Route index element={<Home />} />
            <Route path="appBar" element={<First />} />
            <Route path="accordion" element={<Second />} />
            <Route path="paper" element={<Third />} />
            <Route path="card" element={<Fourth />} />
            <Route path="box" element={<Fifth />} />
            <Route path="grid" element={<Sixth />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
