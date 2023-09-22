import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./pages/commons/NavbarComp";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import AdminDashboard from "./pages/dashboard/index";
import MaybeShowNavbarComp from "./pages/commons/MaybeShowNavbarComp";
import DoesNotRememberPassword from "./pages/DoesNotRememberPassword";
import VerifyPassword from "./pages/VerifyPassword";
import MessageSystem from "./pages/dashboard/services/MessageService";


library.add(faEnvelope, faKey);

function App() {
  return (
    <Router>
      <div className="App">
        <MaybeShowNavbarComp>
          <NavbarComp />
        </MaybeShowNavbarComp>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route
            path="/forgot-password"
            element={<DoesNotRememberPassword />}
          />
          <Route path="/password-reset/:id" element={<VerifyPassword />} />
          <Route path="/AdminDashboard/mail" element={<MessageSystem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
