import Image from 'next/image'
import { GridContainer } from './GridContainer'

export function SectionHero() {
  return (
    <section className="py-16 xl:pb-0 xl:pt-24">
      <GridContainer>
        <div className="text-center">
          <h1 className="mb-6 mt-4 text-3xl font-semibold text-gray-900 xl:text-5xl">
            Descarte consciente para um futuro melhor
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-lg/relaxed text-gray-600 xl:text-xl/6">
            Adote práticas de descarte correto e sustentável para proteger o
            meio ambiente. Pequenas atitudes fazem a diferença.
          </p>
          <a
            href="/map"
            className="mb-16 inline-block rounded-lg border border-gray-300 px-7 py-4 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-100 xl:w-auto"
          >
            Entrar
          </a>
        </div>
        <Image
          src="/map.png"
          width={1216}
          height={480}
          alt="map"
          className="mx-auto rounded-2xl"
        />
      </GridContainer>
    </section>
  )
}
