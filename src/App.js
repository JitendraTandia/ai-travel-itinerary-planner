import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentTrips from "./components/RecentTrips";
import TripItinerary from "./components/TripItinerary";
import Layout from "./Layout/Layout";

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
