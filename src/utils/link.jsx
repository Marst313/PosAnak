import activity from '../images/nav/activity.svg';
import berita from '../images/nav/berita.svg';
import dashboard from '../images/nav/dashboard.svg';
import dataAnak from '../images/nav/dataAnak.svg';
import logout from '../images/nav/logout.svg';
import keluarga from '../images/nav/People.svg';

export const navLinks = [
  {
    id: 1,
    name: 'Dashboard',
    path: 'menu',
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
    path: 'anak',
    icon: dataAnak,
  },
  {
    id: 5,
    name: 'Keluar',
    path: '/',
    icon: logout,
  },
];

export const navLinksAdmin = [
  {
    id: 1,
    name: 'Dashboard',
    path: 'menu',
    icon: dashboard,
  },
  {
    id: 2,
    name: 'Data Anak',
    path: 'dataanak',
    icon: dataAnak,
  },
  {
    id: 3,
    name: 'Data Kegiatan',
    path: 'datakegiatan',
    icon: activity,
  },
  {
    id: 4,
    name: 'Data Keluarga',
    path: 'datakeluarga',
    icon: keluarga,
  },
  {
    id: 5,
    name: 'Data Berita',
    path: 'databerita',
    icon: berita,
  },

  {
    id: 6,
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

export const tableHeaderKeluarga = [
  {
    name: 'NO KK',
  },
  {
    name: 'NIK Kepala Keluarga',
  },
  {
    name: 'Kepala Keluarga',
  },
  {
    name: 'ANGGOTA',
  },
];

export const tableHeaderDataAnak = [
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
  {
    name: 'NAMA IBU',
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

export const dummyDataAnak = [
  {
    tanggalLahir: '22/01/2023',
    nik: '12345678',
    nama: 'Wardi',
    umur: '10 Bulan',
    namaIbu: 'Sri',
  },
  {
    tanggalLahir: '22/01/2023',
    nik: '12345678',
    nama: 'Yono',
    umur: '3 Bulan',
    namaIbu: 'Suwartini',
  },
  {
    tanggalLahir: '22/01/2023',
    nik: '12345678',
    nama: 'Budi',
    umur: '10 Bulan',
    namaIbu: 'Kustini',
  },
];

export const dummyDataKeluarga = [
  {
    noKk: '23213123213123',
    nikKepalaKeluarga: '2131232121222',
    kepalaKeluarga: 'Asep',
    anggota: 3,
  },
  {
    noKk: '55232232322',
    nikKepalaKeluarga: '222333212',
    kepalaKeluarga: 'Rudy',
    anggota: 4,
  },
  {
    noKk: '3122313333122',
    nikKepalaKeluarga: '3422121212',
    kepalaKeluarga: 'Budi',
    anggota: 2,
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
