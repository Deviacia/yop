import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './layout'
import { SubscriptionView } from '@/modules/subscriptions'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ index: true, element: <SubscriptionView /> }]
  }
])
