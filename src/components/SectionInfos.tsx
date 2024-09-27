import { FaDonate, FaLeaf, FaRecycle, FaTrashAlt } from 'react-icons/fa'
import { GiRecycle } from 'react-icons/gi'
import { MdDevices } from 'react-icons/md'
import { GridContainer } from './GridContainer'
import { ItemFeature } from './ItemFeature'

export function SectionInfos() {
  return (
    <section className="py-16 xl:py-24">
      <GridContainer>
        <div className="mb-16 text-center">
          <small className="mb-3 block text-base font-semibold text-gray-700">
            Faça sua Parte
          </small>
          <h2 className="tracking-tighter-[-0.72px] mb-5 text-center text-3xl font-semibold text-gray-900 xl:text-4xl">
            Descarte Consciente para um Futuro Sustentável
          </h2>
          <p className="mx-auto max-w-3xl text-lg/relaxed text-gray-600 xl:text-xl/6">
            Pequenas mudanças no descarte fazem uma grande diferença. Contribua
            para um planeta mais limpo e saudável.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 xl:grid-cols-3 xl:gap-y-16">
          <ItemFeature
            icon={<FaTrashAlt size={24} className="text-gray-600" />}
            title="Separe o Lixo Corretamente"
            text="Classifique o lixo em reciclável, orgânico e não reciclável para facilitar a reciclagem."
          />
          <ItemFeature
            icon={<GiRecycle size={24} className="text-gray-600" />}
            title="Recicle Sempre que Possível"
            text="Reutilize papel, vidro e plástico para reduzir desperdício e preservar recursos."
          />
          <ItemFeature
            icon={<MdDevices size={24} className="text-gray-600" />}
            title="Descarte Eletrônicos com Cuidado"
            text="Leve equipamentos eletrônicos a pontos de coleta para reciclagem segura."
          />
          <ItemFeature
            icon={<FaRecycle size={24} className="text-gray-600" />}
            title="Evite o Uso de Plásticos"
            text="Use sacolas e embalagens reutilizáveis para diminuir a poluição."
          />
          <ItemFeature
            icon={<FaLeaf size={24} className="text-gray-600" />}
            title="Composte o Lixo Orgânico"
            text="Transforme restos de comida em adubo, reduzindo o lixo nos aterros."
          />
          <ItemFeature
            icon={<FaDonate size={24} className="text-gray-600" />}
            title="Doe em Vez de Jogar Fora"
            text="Doe roupas e eletrônicos em bom estado para ajudar quem precisa e evitar acúmulo de lixo."
          />
        </div>
      </GridContainer>
    </section>
  )
}
