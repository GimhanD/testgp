import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from './pages/UserPage';
import BookingPage from './pages/BookingPage';
import VehiclePage from './pages/VehiclePage';
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={ <NavBar/>} >
          <Route index element={<UserPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="vehicle" element={<VehiclePage />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
  
  );
}

export default App;
