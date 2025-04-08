import { Button } from '@/shared/ui'
import { useStepsContext } from '../hooks/use-steps-context'

import { SubscriptionAdvantages } from './subscription-advantages'
import { SubscriptionHeader } from './subscription-header'

interface SubscriptionLayoutProps {
  children: (currentStep: number) => React.JSX.Element
}

export function SubscriptionLayout({ children }: SubscriptionLayoutProps) {
  const { currentStep, nextStep, canGoToNextStep } = useStepsContext()

  return (
    <section className="flex flex-col gap-y-11 mb-11">
      <SubscriptionHeader />

      <div>{children(currentStep)}</div>

      {canGoToNextStep ? <Button onClick={nextStep}>Neste</Button> : null}

      <SubscriptionAdvantages />
    </section>
  )
}
