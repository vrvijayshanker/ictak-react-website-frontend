import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admindashboard from './pages/Admindashboard';
import Adminlogin from './pages/Adminlogin';
import AddCourse from './components/AddCourse';
import AddStaff from './components/AddStaff';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admindashboard' element={<Admindashboard/>} />
        <Route path='/adminlogin' element={<Adminlogin/>} />  
        <Route path='/admindashboard/addcourse' element={<AddCourse/>} />
        <Route path='/admindashboard/addstaff' element={<AddStaff/>} />      
      </Routes>
    </div>
  );
}

export default App;
