import activity from '../images/nav/activity.svg';
import berita from '../images/nav/berita.svg';
import dashboard from '../images/nav/dashboard.svg';
import dataAnak from '../images/nav/dataAnak.svg';
import logout from '../images/nav/logout.svg';

export const navLinks = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/dashboard',
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
    path: '/',
    icon: logout,
  },
];

export const tableHeader = [
  {
    name: 'NIK',
  },
  {
    name: 'NAMA',
  },
  {
    name: 'TANGGAL LAHIR',
  },
  {
    name: 'UMUR',
  },
];

export const dummyData = [
  {
    tanggalLahir: '22/01/2023',
    umur: '10 Bulan',
    nik: '12345678',
    nama: 'Budi',
  },
  {
    tanggalLahir: '22/02/2023',
    umur: '9 Bulan',
    nik: '23456789',
    nama: 'Slamet',
  },
  {
    tanggalLahir: '22/03/2023',
    umur: '8 Bulan',
    nik: '345678901',
    nama: 'Joko',
  },
];

export const navLinksLanding = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Kegiatan',
    path: 'activities',
  },
  {
    name: 'Berita',
    path: 'article',
  },
];
