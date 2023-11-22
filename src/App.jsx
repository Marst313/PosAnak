import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

// Import pages
import { Berita, Dashboard, DataAnak, Error, Kegiatan, Landing, Login, Profiles, ProtectedRoute } from './pages/';
import SharedLayout from './partials/SharedLayout';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="berita" element={<Berita />} />
          <Route path="profile" element={<Profiles />} />
          <Route path="kegiatan" element={<Kegiatan />} />
          <Route path="dataanak" element={<DataAnak />} />
        </Route>

        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
