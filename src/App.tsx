import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './common/Layout';
import Home from './common/pages/Home';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/project/:id" element={<ProjectDetail />} />*/}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
