import DefaultLayout from '../layouts/MainLayout.vue'
import Home from '../pages/Home.vue'
import Career from '../pages/Career.vue'
import Stack from '../pages/Stack.vue'
import Blog from '../pages/Blog.vue'
import Music from '../pages/Music.vue'
import Travel from '../pages/Travel.vue'
import Contact from '../pages/Contact.vue'
import ErrorPage from '../pages/Error404.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: '', component: Home },
      { path: '/home', name: 'Home', component: Home },
      { path: '/career', name: 'Career', component: Career },
      { path: '/stack', name: 'Stack', component: Stack },
      { path: '/blog*', name: 'Blog', component: Blog, props: true },
      { path: '/music', name: 'Music', component: Music },
      { path: '/travel', name: 'Travel', component: Travel },
      { path: '/contact', name: 'Contact', component: Contact }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({ path: '*', component: ErrorPage })
}

export default routes
