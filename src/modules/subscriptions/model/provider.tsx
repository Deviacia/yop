import { useCallback, useState } from 'react'
import {
  StepsContext,
  type SubscriptionDataT,
  type SubscriptionFormT
} from './context'
import { DEFAULT_SELECTED_SUBSCRIPTION, STEPS_NUMBER } from './constants'

interface StepsProviderProps {
  children: React.ReactNode
}

export const StepsProvider = ({ children }: StepsProviderProps) => {
  const [currentStep, setCurrentStep] = useState<number>(2)

  const [subscriptionFormData, setSubscriptionFormData] =
    useState<SubscriptionFormT>({
      1: { email: '' },
      2: { id: DEFAULT_SELECTED_SUBSCRIPTION },
      3: { something: {} },
      4: { something: {} }
    })

  const canGoToNextStep = currentStep < STEPS_NUMBER

  function updateSubscriptionFormData(
    step: number,
    patch: Partial<SubscriptionDataT>
  ) {
    setSubscriptionFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...patch }
    }))
  }

  const nextStep = useCallback(() => {
    if (canGoToNextStep) {
      setCurrentStep((step) => step + 1)
    }
  }, [canGoToNextStep])

  return (
    <StepsContext.Provider
      value={{
        stepsNumber: STEPS_NUMBER,
        currentStep,
        subscriptionFormData,
        nextStep,
        updateSubscriptionFormData,
        canGoToNextStep
      }}
    >
      {children}
    </StepsContext.Provider>
  )
}
