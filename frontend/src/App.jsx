import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import ImageUpload from './components/ImageUpload';
import CheckReports from './components/CheckReports';
import BookAppointments from './components/BookAppointments';
import UserProfile from './components/Profile';
import NearbyClinics from './components/NearbyClinics';
import HealthTips from './components/HealthTips';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/check-reports" element={<CheckReports />} />
        <Route path="/appointments" element={<BookAppointments />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/clinics" element={<NearbyClinics />} />
        <Route path="/health-tips" element={<HealthTips />} />
      </Routes>
    </Router>
  );
}

export default App;
