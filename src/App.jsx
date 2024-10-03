import { useState } from "react";
import Layout from "../src/app/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider } from './components/Auth/AuthContext';
// import PrivateRoute from './components/Routes/PrivateRoutes';
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";

import Dashboard from "./components/Dashboard/Dashboard";
import Profiles from "./components/Customers/Profiles";
import CustomerProfile from "./components/Customers/CustomerProfile";
import ServicesList from "./components/Services/ServicesList";
import ServicesTypes from "./components/Services/ServicesTypes";
import SelectServices from "./components/Services/SelectServices";
import AllAuditors from "./components/Auditors/AllAuditors";
import UpdateProfile from "./components/Auditors/UpdateProfile";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login users={users} />} />
        <Route
          path="/signup"
          element={<SignUp setUsers={setUsers} users={users} />}
        />

        <Route
          path="/dashboard"
          element={
            // <PrivateRoute>
            <Layout>
              <div className="bg-white w-full">
                <Dashboard />
              </div>
              {/* // </PrivateRoute> */}
            </Layout>
          }
        />
        
        {/* Customers */}
        <Route
          path="/customers"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <Profiles />
              </div>
            </Layout>
          }
        />
        <Route path="/customerProfile" element={<CustomerProfile />} />
        <Route
          path="/services-type"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-screen">
                <ServicesTypes />
              </div>
            </Layout>
          }
        />

        {/* Auditors */}
        <Route
          path="/auditors"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <AllAuditors />
              </div>
            </Layout>
          }
        />
        <Route
          path="/auditorProfile"   //Only Admin update
          element={ <UpdateProfile />}
        />

        {/* Services */}
        <Route
          path="/services-list"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <ServicesList />
              </div>
            </Layout>
          }
        />
        <Route
          path="/services-select"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <SelectServices />
              </div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
