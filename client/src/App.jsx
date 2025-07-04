import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PatientDashBroad from "./components/PatientDashBroad";
import DoctorDashboard from "./components/DoctorDashboard";
import HospitalDashborad from "./components/HospitalDashborad";
import HospitalSelection from "./components/HospitalSelection";
import HospitalDetails from "./components/HospitalDetails";
import DoctorProfileSetup from "./components/DoctorProfileSetup";
import ChatWidget from "./components/ChatWidget";
import Navigation from "./components/Navigation";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import SkinSightFeatures from "./components/features";
import { SocketProvider } from './context/SocketContext';
import SkinAnalyzer from "./components/SkinAnalyzer";

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <Toaster position="top-center" />
        <Router>
          <div className="min-h-screen bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path='/features' element={<SkinSightFeatures/>}/>
              <Route
                path="/ml"
                element={
                  <ProtectedRoute roles={['patient']}>
                    <SkinAnalyzer />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/patient"
                element={
                  <ProtectedRoute roles={['patient']}>
                    <PatientDashBroad />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor"
                element={
                  <ProtectedRoute roles={['doctor']}>
                    <DoctorDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/hospital"
                element={
                  <ProtectedRoute roles={['staff']}>
                    <HospitalDashborad />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/hospital-selection"
                element={
                  <ProtectedRoute roles={['staff', 'doctor']}>
                    <HospitalSelection />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor-profile-setup"
                element={
                  <ProtectedRoute roles={['doctor']}>
                    <DoctorProfileSetup />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/hospital-details/:hospitalId"
                element={
                  <ProtectedRoute roles={['patient']}>
                    <HospitalDetails />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <ChatWidget />
          </div>
        </Router>
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;
