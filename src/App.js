import { HashRouter, Routes, Route } from "react-router-dom";
import Eight from "./pages/Eight";
import Fifth from "./pages/Fifth";
import First from "./pages/First";
import Fourth from "./pages/Fourth";
import Home from "./pages/Home";
import Ninenth from "./pages/Ninenth";
import NoPage from "./pages/NoPage";
import Second from "./pages/Second";
import Seventh from "./pages/Seventh";
import Sixth from "./pages/Sixth";
import Third from "./pages/Third";
import ResponsiveDrawer from "./ResponsiveDrawer";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ResponsiveDrawer />}>
            <Route index element={<Home />} />
            <Route path="appBar" element={<First />} />
            <Route path="accordion" element={<Second />} />
            <Route path="paper" element={<Third />} />
            <Route path="card" element={<Fourth />} />
            <Route path="box" element={<Fifth />} />
            <Route path="grid" element={<Sixth />} />
            <Route path="stack" element={<Seventh />} />
            <Route path="image-list" element={<Eight/>} />
            <Route path="useState" element={<Ninenth/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
          
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
