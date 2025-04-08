import { SubscriptionStepper } from './subscription-stepper'

export function SubscriptionHeader() {
  return (
    <header className='flex justify-center'>
      <div className="flex flex-col gap-y-7 w-[245px]">
        <div>
          <p className="text-center text-xl font-semibold">MyLuck</p>
          <p className="text-center text-sm text-gray-500">
            Velg ditt abonnement
          </p>
        </div>

        <SubscriptionStepper />
      </div>
    </header>
  )
}
