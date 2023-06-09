import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Taks_1 from './Pages/Taks_1';
import Taks_2 from './Pages/Taks_2';
import Taks_3 from './Pages/Taks_3';
import Taks_4 from './Pages/Taks_4';
import Taks_5 from './Pages/Taks_5';
import OtherWeb from './Pages/OtherWeb';
import OtherHeatmap from './Pages/OtherHeatmap';
import HeatmapFix from './Pages/HeatmapFix';
import InputLink from './Pages/Web/InputLink';
import Titik_Fokus_Heatmap from './Pages/Titik_Fokus_Heatmap';

function App() {

  return (
    <>
    <BrowserRouter>

        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/Taks_1"  element={<Taks_1 />}/>
          <Route path="/Taks_2"  element={<Taks_2 />}/>
          <Route path="/Taks_3"  element={<Taks_3 />}/>
          <Route path="/Taks_4"  element={<Taks_4 />}/>
          <Route path="/Taks_5"  element={<Taks_5 />}/>
          <Route path="/Headmap"  element={<HeatmapFix />}/>
          <Route path="/Titik_Fokus_Heatmap"  element={<Titik_Fokus_Heatmap />}/>
          <Route path="/OtherWeb"  element={<OtherWeb />}/>
          <Route path="/OtherHeatmap"  element={<OtherHeatmap />}/>
          <Route path="/InputLink"  element={<InputLink />}/>

        </Routes>
    </BrowserRouter>

      </>
  );
}

export default App;
