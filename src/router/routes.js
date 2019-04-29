import {lazy} from 'react';

export const routes = [
  {
    title: 'Qantas Cars',
    path: '/',
    exact: true,
    component: lazy(()=> import(/* webpackChunkName: "home" */ '../home'))
  },
  {
    title: 'Qantas Cars - FAQ',
    path: '/faq',
    exact: true,
    component: lazy(()=> import(/* webpackChunkName: "faq" */ '../faq'))
  }
];
