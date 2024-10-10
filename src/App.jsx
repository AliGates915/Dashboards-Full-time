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
import QuestionList from "./components/Customers/Course/QuestionList";
import CustomerQuestions from "./components/Customers/Course/CustomerQuestions";
import CertificateForm from './components/Certificate/CertificateForm'
import AddQuestion from './components/Add Questions/AddQuestion'
import Branch from './components/Branches/Branch'
import Verification from './components/Verification/Verification'
import CustomerDashboard from "./components/Dashboard/customer/CustomerDashboard";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login users={users}/>} />
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

        {/* Customer dashboard */}
        <Route
          path="/customer-dashboard"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <CustomerDashboard />
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
        {/* AddQuestion */}
        <Route path="/add-question" 
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <AddQuestion />
              </div>
            </Layout>
          }
        />

        {/* Course */}
        <Route
          path="/course"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <QuestionList />
              </div>
            </Layout>
          }
        />

        {/* Verification */}
        <Route
          path="/verification"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <Verification />
              </div>
            </Layout>
          }
        />
  
        <Route
          path="/customer-questions"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <CustomerQuestions />
              </div>
            </Layout>
          }
        />

      {/* Branch */}
      <Route
          path="/branch"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <Branch />
              </div>
            </Layout>
          }
        />
      
      
      {/* Certificate */}
      <Route
          path="/certificate"
          element={
            <Layout>
              <div className="bg-[#ceeff5] w-full h-full">
                <CertificateForm />
              </div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
