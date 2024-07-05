import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About';
import Create from './Components/Create'
import Edit from './Components/Edit';
import Delete from './Components/Delete';
import './Components/Home.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
    </div>
  );
}

export default App;
