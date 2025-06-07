import FeedBack from '@/components/feedback/feedback'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/challanges/feedback')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='w-svw h-svh flex justify-center items-center '> 
    <FeedBack onSubmit={val => {alert(val.name)}}/>
  </div>
}
