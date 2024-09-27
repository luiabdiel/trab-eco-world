import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  className?: string
}

export function GridContainer({ children, className }: Props) {
  return (
    <div className={twMerge('mx-auto w-full max-w-container px-3', className)}>
      {children}
    </div>
  )
}
