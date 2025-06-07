import { useDevtools } from '@/hooks/useDevtools'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useEffect } from 'react'

const Devtools = () => {
  const { isDevtoolsEnabled } = useDevtools()

  useEffect(() => {
    if (isDevtoolsEnabled) {
      console.log('%c[Devtools]', 'color: limegreen', 'Devtools are enabled')
    }
  }, [isDevtoolsEnabled])

  if (!isDevtoolsEnabled) return null

  return (
    <div data-testid="devtools-wrapper">
      <TanStackRouterDevtools />
    </div>
  )
}

export default Devtools
