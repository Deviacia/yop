import { useEffect, useState } from 'react'
import { useDebounce } from '@/shared/hooks/use-debounce'
import { useStepsContext } from '../../hooks/use-steps-context'

export function SubscriberEmailView() {
  const { currentStep, subscriptionFormData, updateSubscriptionFormData } =
    useStepsContext()

  const [email, setEmail] = useState(subscriptionFormData[3]?.email || '')
  const debouncedEmail = useDebounce(email, 500)

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(ev.target.value)
  }

  useEffect(() => {
    if (debouncedEmail !== subscriptionFormData[3]?.email) {
      updateSubscriptionFormData(currentStep, { email: debouncedEmail })
    }
  }, [debouncedEmail, subscriptionFormData, updateSubscriptionFormData])

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={handleChange}
        className="w-full border rounded-full py-2 px-4"
        placeholder="email"
      />
    </div>
  )
}
