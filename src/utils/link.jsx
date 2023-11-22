import activity from '../images/nav/activity.svg';
import berita from '../images/nav/berita.svg';
import dashboard from '../images/nav/dashboard.svg';
import dataAnak from '../images/nav/dataAnak.svg';
import logout from '../images/nav/logout.svg';

export const navLinks = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/',
    icon: dashboard,
  },
  {
    id: 2,
    name: 'Berita',
    path: 'berita',
    icon: berita,
  },
  {
    id: 3,
    name: 'Kegiatan',
    path: 'kegiatan',
    icon: activity,
  },
  {
    id: 4,
    name: 'Data Anak',
    path: 'dataanak',
    icon: dataAnak,
  },
  {
    id: 5,
    name: 'Keluar',
    path: '/landing',
    icon: logout,
  },
];
