import React from 'react'

const Home = React.lazy(() => import('../pages/Home'))
const Contact = React.lazy(() => import('../pages/Contact'))
const CategoryWise = React.lazy(() => import('../pages/CategoryWise'))

export const routesList = {
  home: '/',
  contact: '/contact',
  categoryWise: '/groupedattractions/:id',
}

const MainRouteList = [
  { path: routesList.home, exact: true, element: Home },
  { path: routesList.contact, exact: false, element: Contact },
  { path: routesList.categoryWise, exact: false, element: CategoryWise },
]
export default MainRouteList
