import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admindashboard from './pages/Admindashboard';
import Adminlogin from './pages/Adminlogin';
import Admincourse from './pages/Admincourse';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admindashboard' element={<Admindashboard/>} />
        <Route path='/adminlogin' element={<Adminlogin/>} />
        <Route path='/admindashboard/admincourse' element={<Admincourse/>} />        
      </Routes>
    </div>
  );
}

export default App;
