import { StepsProvider } from '../model/provider'

import { SubscriptionLayout } from './subscription-layout'

import { SubscriberEmailView } from './steps/subscriber-email-view'
import { SubscriptionSelectView } from './steps/subscription-select-view'

export function SubscriptionView() {
  const MATCH_STEPS_VIEW: Record<number, React.JSX.Element> = {
    1: <SubscriberEmailView />,
    2: <SubscriptionSelectView />,
    3: <>3 step - Blank</>,
    4: <>4 step - Blank</>
  }

  return (
    <StepsProvider>
      <SubscriptionLayout>
        {(currentStep) => MATCH_STEPS_VIEW[currentStep]}
      </SubscriptionLayout>
    </StepsProvider>
  )
}
