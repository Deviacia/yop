import { forwardRef } from 'react'
import { type ButtonProps } from './types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, ...props }, ref) {
    return (
      <button
        ref={ref}
        className="py-2 rounded-full text-5 bg-[#FBDCFB] border-2 border-black font-bold"
        {...props}
      >
        {children}
      </button>
    )
  }
)
