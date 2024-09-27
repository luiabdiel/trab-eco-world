'use client'

import React from 'react'

type Props = {
  url: string
  title: string
}

export function ItemMenu({ url, title }: Props) {
  return (
    <a
      href={url}
      className="flex items-center gap-2 font-semibold text-gray-600 transition-opacity hover:opacity-50"
    >
      {title}
    </a>
  )
}
