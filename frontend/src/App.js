// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Create from './Components/Create';
import Edit from './Components/Edit';
import Delete from './Components/Delete';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile'; // Import the Profile component
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="create" element={<Create />} />
            <Route path="edit/:id" element={<Edit />} />
            <Route path="delete/:id" element={<Delete />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
