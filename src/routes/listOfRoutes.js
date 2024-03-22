import React from 'react'

const Home = React.lazy(() => import('../pages/Home'))
const Contact = React.lazy(() => import('../pages/Contact'))

export const routesList = {
  home: '/',
  contact: '/contact',
}

const MainRouteList = [
  { path: routesList.home, exact: true, element: Home },
  { path: routesList.contact, exact: false, element: Contact },
]
export default MainRouteList
