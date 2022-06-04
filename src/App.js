import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import Fourth from "./pages/Fourth";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Second from "./pages/Second";
import Third from "./pages/Third";
import ResponsiveDrawer from "./ResponsiveDrawer";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ResponsiveDrawer/>}>
        <Route index element={<Home/>} />
        <Route path="appBar" element={<First/>} />
        <Route path="accordion" element={<Second/>} />
        <Route path="paper" element={<Third/>} />
        <Route path="card" element={<Fourth/>} />
        <Route path="*" element={<NoPage/>} />
              
      </Route>
      
    </Routes>
  </BrowserRouter>
    
     
    </>
  );
}

export default App;
