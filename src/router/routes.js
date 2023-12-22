
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'play/:userName', component: () => import('pages/Play.vue') },
      { path: 'p1', component: () => import('pages/p1.vue') },
      { path: 'p2', component: () => import('pages/p2.vue') },
      { path: 'p3', component: () => import('pages/p3.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
