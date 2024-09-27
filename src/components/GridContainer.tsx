'use client'

import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  className?: string
}

export function GridContainer({ children, className }: Props) {
  return (
    <div className={twMerge('max-w-container mx-auto w-full px-3', className)}>
      {children}
    </div>
  )
}
