import "./App.css";
import ApartmentDetails from "./components/ApartmentDetails";
import ApartmentsList from "./components/ApartmentsList";
import CreateApartment from "./components/CreateApartment";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apartments" element={<ApartmentsList />} />
          <Route path="/apartments/:id" element={<ApartmentDetails />} />
          <Route path="/apartments/create" element={<CreateApartment />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

{
  /* 

<CreateApartment /> */
}
