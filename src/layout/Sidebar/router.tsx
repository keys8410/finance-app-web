import React from 'react';
import {
  HiOutlineChartSquareBar,
  HiOutlineHome,
  HiOutlineChartPie,
  HiOutlineUser,
} from 'react-icons/hi';

export default [
  {
    icon: <HiOutlineHome />,
    name: 'Home',
    to: '/',
  },
  {
    icon: <HiOutlineUser />,
    name: 'Meu Perfil',
    to: '/user',
  },
  {
    icon: <HiOutlineChartSquareBar />,
    name: 'Visão Geral',
    to: '/overview',
  },
  {
    icon: <HiOutlineChartPie />,
    name: 'Estatísticas',
    to: '/stats',
  },
];
