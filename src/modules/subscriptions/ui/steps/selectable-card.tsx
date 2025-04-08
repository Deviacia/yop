import { ReactNode } from 'react'
import { classNames } from '@/shared/utils/lib'

interface SelectableCardRootProps {
  children: ReactNode
  checked?: boolean
  onClick?: () => void
}

function Root({ children, checked, onClick }: SelectableCardRootProps) {
  return (
    <div
      className={classNames(
        'flex flex-col justify-center rounded-[20px] overflow-hidden border-2 transition cursor-pointer',
        checked ? 'border-black bg-white' : 'bg-[#F5F5F7] border-transparent'
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

function Header({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={classNames(
        'text-black text-xs px-3 py-1 shadow-sm font-medium text-center',
        className
      )}
    >
      {children}
    </div>
  )
}

function Content({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-between py-3 px-4 items-center">
      {children}
    </div>
  )
}

function LabelBlock({
  id,
  label,
  checked
}: {
  id: string
  label: string
  checked: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="shrink-0 relative w-[26px] h-[26px] block">
        <input
          type="radio"
          id={id}
          checked={checked}
          readOnly
          className="peer hidden"
        />
        <span
          className={classNames(
            'block w-full h-full rounded-full border border-black',
            'flex items-center justify-center'
          )}
        >
          <span
            className={classNames(
              'w-[16px] h-[16px] rounded-full bg-black transition-all',
              checked ? 'opacity-100' : 'opacity-0'
            )}
          />
        </span>
      </label>

      <label htmlFor={id} className="font-medium text-black cursor-pointer">
        {label}
      </label>
    </div>
  )
}

function PriceBlock({
  discount,
  month,
  day
}: {
  discount?: number
  month: number
  day: number
}) {
  return (
    <div className="text-right shrink-0">
      {discount && (
        <div className="text-sm text-black bg-[#66FCA0] px-2 rounded-full inline-block mb-1">
          - {discount}kr
        </div>
      )}
      <p className="text-black font-semibold">{month} kr måned</p>
      <p className="text-gray-500 text-sm">{day} kr per dag</p>
    </div>
  )
}

export const SelectableCard = {
  Root,
  Header,
  Content,
  LabelBlock,
  PriceBlock
}
