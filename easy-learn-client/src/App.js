import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SignIn from "./pages/signin.js";
import LearnerSignup from "./pages/learner/learner-signup.js";
import LearnerDashboard from "./pages/learner/learner-dashboard.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SignIn />} />
        <Route path="/learner-signup" exact element={<LearnerSignup />} />
        <Route path="/learner-dashboard" exact element={<LearnerDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
