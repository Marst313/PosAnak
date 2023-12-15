import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

// Import pages

import { Activities, BeritaLanding, Daftar, Landing, Login, OpenSingleBerita, SemuaBerita, SharedLayoutLanding } from './landing/';

import { DashboardKegiatan, DashboardKeluarga, Editor, DashboardAnak, DashboardBerita } from './admin';
import { Berita, Dashboard, DataAnak, Kegiatan, Profiles, SingleBerita } from './user';

import { Error, ProtectedRoute, SharedLayout } from './components';

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
        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index path="menu" element={<Dashboard />} />

          <Route path="berita" element={<Berita />} />
          <Route path="tambahBerita" element={<Editor />} />
          <Route path="berita/:id" element={<SingleBerita />} />
          <Route path="profile" element={<Profiles />} />
          <Route path="kegiatan" element={<Kegiatan />} />
          <Route path="anak" element={<DataAnak />} />

          <Route path="dataanak" element={<DashboardAnak />} />
          <Route path="databerita" element={<DashboardBerita />} />
          <Route path="tambahberita" element={<DashboardBerita />} />

          <Route path="datakegiatan" element={<DashboardKegiatan />} />
          <Route path="datakeluarga" element={<DashboardKeluarga />} />
        </Route>

        <Route path="/" element={<SharedLayoutLanding />}>
          <Route index element={<Landing />} />
          <Route path="activities" element={<Activities />} />
          <Route path="article" element={<BeritaLanding />} />
          <Route path="semuaBerita" element={<SemuaBerita />} />
          <Route path="berita/:id" element={<OpenSingleBerita />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
