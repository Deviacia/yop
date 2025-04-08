import { useStepsContext } from '../../hooks/use-steps-context'
import { SelectableCard } from './selectable-card'

export function SubscriptionSelectView() {
  const { currentStep, subscriptionFormData, updateSubscriptionFormData } =
    useStepsContext()

  const selectSubscriptionVariant = (value: number) => {
    updateSubscriptionFormData(currentStep, { id: value })
  }

  return (
    <div className="relative flex flex-col gap-y-4">
      <div className="absolute -top-4 left-[30px] py-1 px-3 bg-[#FBDCFB] text-black  rounded-full">
        Premium
      </div>

      <SelectedSubscribeAdvantages advantages={ADVANTAGES} />

      <div className="grid grid-rows-3 gap-4 sm:grid-rows-1 sm:grid-cols-3">
        {SUBSCRIPTIONS.map((subscription) => (
          <SelectableCard.Root
            checked={subscriptionFormData[currentStep].id === subscription.id}
            onClick={() => selectSubscriptionVariant(subscription.id)}
          >
            {subscription.header && (
              <SelectableCard.Header
                className={`${
                  subscription.id === 3 ? 'bg-[#FBDCFB]' : 'bg-yellow-200'
                }`}
              >
                {subscription.header}
              </SelectableCard.Header>
            )}

            <SelectableCard.Content>
              <SelectableCard.LabelBlock
                id={`subscription-${subscription.id}`}
                label={subscription.label}
                checked={
                  subscriptionFormData[currentStep].id === subscription.id
                }
              />
              <SelectableCard.PriceBlock {...subscription.price} />
            </SelectableCard.Content>
          </SelectableCard.Root>
        ))}
      </div>
    </div>
  )
}

interface SelectedSubscribeAdvantagesProps {
  advantages: string[]
}

function SelectedSubscribeAdvantages({
  advantages
}: SelectedSubscribeAdvantagesProps) {
  function CheckIcon() {
    return (
      <div className="w-[20px] h-[20px] rounded-[4px] flex shrink-0 bg-[#E5E5E5] items-center justify-center">
        <svg
          width="10"
          height="8"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 6.5L5.5 10.5L14.5 1.5"
            stroke="#5F5F5F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 p-[30px] rounded-[20px] pt-6">
      <h3 className="text-left sm:text-center text-xl font-semibold mb-6">
        Myluck abonnement
      </h3>

      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {advantages.map((advantage, advantageId) => (
          <li key={advantageId} className="flex gap-2 text-sm text-gray-700">
            <CheckIcon />
            {advantage}
          </li>
        ))}
      </ul>
    </div>
  )
}

const ADVANTAGES = [
  'Tilgang til Myluck-appen',
  '200+ delikate oppskrifter fra Mila',
  'Opprett oppskrifter i måltider',
  'Opprett din egen matplan',
  'Tilgang til treningsinformasjon med videoer',
  'Tilgang til ukentlige matplaner',
  'Skreddersydd kostholdsplan og matplaner etter dine mål',
  'Få coach-veiledning om helse og trening',
  'Livestream recordings'
]

const SUBSCRIPTIONS = [
  {
    id: 1,
    label: 'Premium 1-måned',
    price: {
      month: 890,
      day: 29.66
    }
  },
  {
    id: 2,
    header: 'Mest populær',
    label: 'Premium 6 måneders binding',
    price: {
      discount: 300,
      month: 590,
      day: 19.66
    }
  },
  {
    id: 3,
    header: 'Mest for pengene',
    label: 'Premium 12 måneders binding',
    price: {
      discount: 400,
      month: 490,
      day: 16.33
    }
  }
]
