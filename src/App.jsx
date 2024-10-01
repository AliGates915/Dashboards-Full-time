
import {useState} from 'react'
import Layout from '../src/app/Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './components/Auth/AuthContext';
// import PrivateRoute from './components/Routes/PrivateRoutes';
import Login from './components/Auth/Login'
import SignUp from './components/Auth/Signup'

import Dashboard from './components/Dashboard/Dashboard';
import CustomerProfile from './components/Customer/CustomerProfile';
function App() {

  const [users, setUsers] = useState([]);

    return (  
      
      <Router>
        
        <Routes>
        {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/signup" element={<SignUp setUsers={setUsers} users={users} />} />
          <Route path="/login" element={<Login users={users} />} />
         
          <Route path="/dashboard" element={
            // <PrivateRoute>
            <Layout>
                <Dashboard />
            {/* // </PrivateRoute> */}
            </Layout>
          }
          />
          <Route path='/customerProfile' element={<CustomerProfile />} />
          
        </Routes>
      </Router>

    );
  }

export default App
