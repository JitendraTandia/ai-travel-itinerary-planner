import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentTrips from "./components/RecentTrips";


function App() {
  return (
    <div className="bg-bg bg-cover bg-no-repeat">
     <Navbar/>
     <Hero/>
     <RecentTrips/>
    </div>
  );
}

export default App;
