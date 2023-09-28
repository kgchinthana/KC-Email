import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './pages/commons/NavbarComp';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './pages/dashboard/Home';
import MaybeShowNavbarComp from './pages/commons/MaybeShowNavbarComp';
import DoesNotRememberPassword from './pages/DoesNotRememberPassword';
import VerifyPassword from './pages/VerifyPassword';
import MessageService from './pages/dashboard/services/MessageService';
import MessageHistory from './pages/dashboard/services/MessageHistory';

library.add(faEnvelope, faKey);

function App() {
  return (
    <Router>
      <div className='App'>
        <MaybeShowNavbarComp>
          <NavbarComp />
        </MaybeShowNavbarComp>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Register />} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route
            path='/forgot-password'
            element={<DoesNotRememberPassword />}
          />
          <Route
            path='/admin-dashboard/message-service'
            element={<MessageService />}
          />
          <Route
            path='/admin-dashboard/message-history'
            element={<MessageHistory />}
          />
          <Route path='/password-reset/:id' element={<VerifyPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
