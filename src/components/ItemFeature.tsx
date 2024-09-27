import { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  title: string
  text: string
}

export function ItemFeature({ icon, title, text }: Props) {
  return (
    <div className="w-full max-w-96 text-center">
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border-8 border-brand-50 bg-brand-100">
        {icon}
      </div>
      <h3 className="mb-2 text-xl/6 font-medium text-gray-900">{title}</h3>
      <p className="leading-6 text-gray-600">{text}</p>
    </div>
  )
}
