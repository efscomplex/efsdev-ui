import {
  BrowserRouter,
  NavLink,
  RouteObject,
  useRoutes,
} from 'react-router-dom'

type RouterProps = {
  routes: RouteObject[]
  Layout?: React.FC
}

export interface IRouter extends React.FC<RouterProps> {
  Link: typeof NavLink
}
const RouterViews: React.FC<RouterProps> = ({ routes, Layout }) => {
  const element = useRoutes(routes)
  return Layout ? <Layout>{element}</Layout> : element
}

export const Router: IRouter = ({ routes, children, Layout }) => {
  return (
    <BrowserRouter>
      {children}
      <RouterViews routes={routes} Layout={Layout} />
    </BrowserRouter>
  )
}

Router.Link = NavLink
