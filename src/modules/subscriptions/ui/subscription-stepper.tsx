import { useStepsContext } from '../hooks/use-steps-context'

export function SubscriptionStepper() {
  const { stepsNumber, currentStep } = useStepsContext()

  const percentage = (currentStep / stepsNumber) * 100

  return (
    <div className="w-full">
      <div className="w-full bg-[#D9D9D9] rounded-full h-2.5 mb-1 overflow-hidden">
        <div
          className="bg-[#E4A3F6] h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="text-center text-sm text-gray-500">
        {currentStep} of {stepsNumber}
      </p>
    </div>
  )
}
