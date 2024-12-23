import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobList from './pages/JobList.tsx';
import JobPost from './pages/JobPost.tsx';
import Header from './components/Header.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/post" element={<JobPost />} />
      </Routes>
    </Router>
  );
};

export default App;
