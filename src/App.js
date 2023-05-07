import React from 'react';
import Stack from './components/Stack';
import NoPage from './components/NoPage';
import Set from './components/Set';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Queue from './components/Queue';
import Map from './components/Map';
import Array from './components/Array';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="array" element={<Array />} />
              <Route path="stack" element={<Stack />} />
              <Route path="queue" element={<Queue />} />
              <Route path="set" element={<Set />} />
              <Route path="map" element={<Map />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
