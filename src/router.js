// src/router.js
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Loadable from 'react-loadable'

import Loader from 'components/LayoutComponents/Loader'
import IndexLayout from 'layouts'
import NotFoundPage from 'pages/404'

const loadable = loader =>
  Loadable({
    loader,
    delay: false,
    loading: () => <Loader />,
  })

const routes = [
  // System Pages
  {
    path: '/user/login',
    component: loadable(() => import('pages/user/login')),
    exact: true,
  },
  {
    path: '/user/forgot',
    component: loadable(() => import('pages/user/forgot')),
    exact: true,
  },

  // Dashboards
  {
    path: '/dashboard/home',
    component: loadable(() => import('pages/dashboard/home')),
  },
  {
    path: '/dashboard/more',
    component: loadable(() => import('pages/dashboard/more')),
    exact: true,
  },
  {
    path: '/dashboard/testimonials',
    component: loadable(() => import('pages/dashboard/testimonials')),
    exact: true,
  },
  {
    path: '/dashboard/resorts',
    component: loadable(() => import('pages/dashboard/resorts')),
    exact: true,
  },
  {
    path: '/dashboard/services',
    component: loadable(() => import('pages/dashboard/services')),
    exact: true,
  },
  // Ecommerce
  {
    path: '/ecommerce/dashboard',
    component: loadable(() => import('pages/ecommerce/dashboard')),
    exact: true,
  },
  {
    path: '/ecommerce/product-details',
    component: loadable(() => import('pages/ecommerce/product-details')),
    exact: true,
  },
]

class Router extends React.Component {
  render() {
    const { history } = this.props
    return (
      <ConnectedRouter history={history}>
        <IndexLayout>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/dashboard/home" />} />
            {routes.map(route => (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
                exact={route.exact}
              />
            ))}
            <Route component={NotFoundPage} />
          </Switch>
        </IndexLayout>
      </ConnectedRouter>
    )
  }
}

export default Router
