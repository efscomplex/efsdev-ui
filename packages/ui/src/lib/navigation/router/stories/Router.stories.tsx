import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Container, Row } from '@/layout'
import { GlobalStyles } from '@/styles'
import { Router } from '@/navigation'

export default {
  component: Router,
  title: 'Components / Navigation / Router',
  decorators: [(story: Function) => <Container>{story()}</Container>],
} as ComponentMeta<typeof Router>

const routes = [
  { path: '/', element: <h1>home</h1> },
  { path: '/about', element: <h1>about</h1> },
]
const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <h1>custom nav</h1>
      <Row as="nav" gap="1rem">
        <Router.Link to="/">home</Router.Link>
        <Router.Link to="/about">about</Router.Link>
      </Row>
      <Container>{children}</Container>
    </div>
  )
}
const AppRouter: ComponentStory<typeof Router> = (args) => {
  return (
    <>
      <GlobalStyles />
      <Router {...args} />
    </>
  )
}
AppRouter.args = {
  routes,
  Layout,
}
export const AppWithRouter = AppRouter
