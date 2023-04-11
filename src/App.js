import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admindashboard from './pages/Admindashboard';
import Adminlogin from './pages/Adminlogin';

function App() {
  return (
    <div className="App">
      <h3>Welcome</h3>
      <Routes>
        <Route path='/admindashboard' element={<Admindashboard/>} />
        <Route path='/adminlogin' element={<Adminlogin/>} />
      </Routes>
    </div>
  );
}

export default App;
