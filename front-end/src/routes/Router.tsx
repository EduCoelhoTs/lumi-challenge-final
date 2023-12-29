import  { ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IRoute, routes } from './routes'
import Layout from '../core/Layout/Layout'

export default function Router() {
    const handleRoute = (route: IRoute): ReactNode => {
        if (route.children && route?.children?.length > 0) {
            return <Route path={route.path} key={route.path} Component={route.component}>
                {route.children?.map(child => 
                    <Route key={child.path} path={child.path} Component={child.component} />
                )}
            </Route>
        }

        return <Route path={route.path} Component={route.component} />
    }

  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                { routes.map(route => {
                    return handleRoute(route);
                })}
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}
