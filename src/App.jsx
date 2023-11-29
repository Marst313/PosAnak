import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

// Import pages
import { Activities, Article, Berita, Daftar, Dashboard, DataAnak, Error, Kegiatan, Landing, Login, Profiles, ProtectedRoute, SingleBerita } from './pages/';
import SharedLayout from './user/SharedLayout';
import SharedLayoutLanding from './landing/SharedLayoutLanding';
import { UserProvider } from './contexts/user';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <UserProvider>
        <Routes>
          {/* Dashboard User */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="berita" element={<Berita />} />
            <Route path="berita/:id" element={<SingleBerita />} />
            <Route path="profile" element={<Profiles />} />
            <Route path="kegiatan" element={<Kegiatan />} />
            <Route path="dataanak" element={<DataAnak />} />
          </Route>
          {/* Dashboard User */}

          <Route path="/" element={<SharedLayoutLanding />}>
            <Route index element={<Landing />} />
            <Route path="activities" element={<Activities />} />
            <Route path="article" element={<Article />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
