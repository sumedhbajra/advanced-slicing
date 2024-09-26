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
    component: () => import('@/views/AboutPage.vue'),
    name: 'About'
  },
  {
    path: '/sub-categories',
    component: () => import('@/views/SubCategory.vue'),
    name: 'List of Sub-Categories'
  },
  {
    path: '/list-of-products',
    component: () => import('@/views/ListOfProducts.vue'),
    name: 'List of Products'
  },
  {
    path: '/category-list',
    component: () => import('@/views/CategoryList.vue'),
    name: 'Category List'
  },
  {
    path: '/news',
    component: () => import('@/views/News.vue'),
    name: 'News'
  }
]

export default PublicRoutes
