import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './common/Layout';
import Home from './common/pages/Home';
import ProjectDetail from './common/pages/ProjectDetail';
import ScrollToTop from './common/Layout/ScrollToTop';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
