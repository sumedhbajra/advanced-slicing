// export const routes = [
//   {
//     path: "/123",
//     component: "@/pages/Home.vue",
//   },
//   {
//     path: "/about",
//     component: "@/pages/About.vue",
//   },
//   {
//     path: "/contact",
//     component: "@/pages/Contact.vue",
//   },
// ];

// type Route = {
//   link: string
//   component: string
// }

export interface CustomRoute {
  path: string
  component: () => Promise<any>
  name?: string
  meta?: Record<string, any>
}

const PublicRoutes: CustomRoute[] = [
  {
    path: '/',
    component: () => import('@/views/HomePage.vue'),
    name: 'Home'
  },
  {
    path: '/about',
    component: () => import('@/views/test-page.vue'),
    name: 'About'
  }
]

export default PublicRoutes
