import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import {HomePage,Rent,TripItinerary} from  "./routes/elementPath"
import { path } from "./routes/path";

function App() {
  return (
    <Routes>
      <Route path={path.home} element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path={path.trip} element={<TripItinerary />} />
        <Route path={path.rent} element={<Rent/>} />
      </Route>
    </Routes>
  );
}

export default App;
