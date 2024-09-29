import Layout from '../src/app/Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';  // Assuming you have a Home component

function App() {

    return (  
      <Router>
        <Layout>
          <Routes>
            {/* Define the route and the component to render */}
            <Route path="/" element={<Dashboard />} />
            {/* Add more routes as needed */}
          </Routes>
        </Layout>
      </Router>
    );
  }

export default App
