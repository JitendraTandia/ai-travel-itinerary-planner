import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { HomePage, Rent, TripItinerary,People,NotFound } from "./routes/elementPath";
import { path } from "./routes/path";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path={path.home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={path.rent} element={<Rent />} />
        <Route path={path.trip} element={<TripItinerary />} />
        <Route path={path.people} element={<People />} />
      </Route>
    </Routes>
  );
}

export default App;
