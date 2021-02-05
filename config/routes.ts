export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
          {
            path: '/',
            name: 'dashboard',
            icon: 'smile',
            component: './Dashboard',
          },
          {
            name: 'list.table-list',
            icon: 'table',
            path: '/list',
            component: './TableList',
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
