'use client'

import React from 'react'
import { FaTree } from 'react-icons/fa'
import { GridContainer } from './GridContainer'
import { ItemMenu } from './ItemMenu'

const menuItems = [
  {
    title: 'Início',
    url: '/',
  },
  {
    title: 'mais',
    url: 'https://umsoplaneta.globo.com/patrocinado/braskem/noticia/2021/11/23/descarte-correto-de-residuos-e-responsabilidade-de-todos-nos.ghtml',
    hasDropdown: true,
  },
  {
    title: 'Mapa',
    url: '/map',
    hasDropdown: true,
  },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[80px] w-full items-center border-b border-b-gray-100 bg-white">
      <GridContainer className="flex items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <FaTree size={28} className="text-gray-600" />
          <nav className="flex items-center gap-8">
            {menuItems.map(({ url, title }, index) => (
              <ItemMenu key={index} title={title} url={url} />
            ))}
          </nav>
        </div>
      </GridContainer>
    </header>
  )
}
