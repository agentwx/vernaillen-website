import DefaultLayout from '../layouts/Default.vue'
import Home from '../pages/Home.vue'
import Career from '../pages/Career.vue'
import Stack from '../pages/Stack.vue'
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
      { path: '/home', name: 'x', component: Home },
      { path: '/career', name: 'xx', component: Career },
      { path: '/stack', name: 'xxx', component: Stack },
      { path: '/music', name: 'xxxx', component: Music },
      { path: '/travel', name: 'xxxxx', component: Travel },
      { path: '/contact', name: 'xxxxxx', component: Contact }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({ path: '*', component: ErrorPage })
}

export default routes
