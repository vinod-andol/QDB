import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './screens/Dashboard';
import DashboardDetails from './screens/DashboardDetails';
import Blogs from './screens/Blogs';
import BlogsDetails from './screens/BlogsDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="" element={<DashboardDetails />} />
            <Route path="Blogs" element={<Blogs />} />
            <Route path="BlogsDetails/:id" element={<BlogsDetails />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
