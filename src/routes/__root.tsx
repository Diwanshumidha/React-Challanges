import { Outlet, createRootRoute } from '@tanstack/react-router'

import Devtools from '@/components/devtools/devtools'
import {Navbar} from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Devtools/>
    </>
  ),
})
