
const routes = [
  {
    path: '/',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/home', name: 'Home', component: () => import('pages/Home.vue') },
      { path: '/career', name: 'Career', component: () => import('pages/Career.vue') },
      { path: '/technologies', name: 'Technologies', component: () => import('pages/Technologies.vue') },
      { path: '/music', name: 'Music', component: () => import('pages/Music.vue') },
      { path: '/travel', name: 'Travel', component: () => import('pages/Travel.vue') },
      { path: '/contact', name: 'Contact', component: () => import('pages/Contact.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
