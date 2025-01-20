import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import {HomePage,Rent,TripItinerary} from  "./routes/elementPath"
import { path } from "./routes/path";

function App() {
  return (
      <Layout>
        <div className="bg-bg pb-7 h-screen flex flex-col justify-end items-center  bg-cover bg-no-repeat backdrop-contrast-75">
          <Hero />
          <RecentTrips />
        </div>
          {/* <TripItinerary/> */}
      </Layout>
    // </div>
  );
}

export default App;
