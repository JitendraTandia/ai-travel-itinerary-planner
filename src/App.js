import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import {
  HomePage,
  Rent,
  TripItinerary,
  People,
  NotFound,
  Budget,
  RegisterPage,
} from "./routes/elementPath";
import { path } from "./routes/path";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path={path.home} element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route path={path.rent} element={<Rent />} />
        <Route path={path.trip} element={<TripItinerary />} />
        <Route path={path.people} element={<People />} />
        <Route path={path.budget} element={<Budget />} />
      </Route>
      <Route path={path.register} element={<RegisterPage />} />
      <Route path={path.login} element={<LoginPage />} />
    </Routes>
  );
}

export default App;
