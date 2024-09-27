'use client'

import { SectionHero, SectionInfos } from '@/components'
import React, { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <SectionHero />
      <SectionInfos />
    </Fragment>
  )
}
