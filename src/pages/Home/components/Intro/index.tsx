import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles'
import introImg from '../../../../assets/intro-img.png'
import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/infoWithIcon'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Intro() {
  const { colors } = useTheme()
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors['brand-yellow-dark']}
              text="Compra simples e segura."
              icon={<ShoppingCart size={20} weight="fill" />}
            />
            <InfoWithIcon
              iconBg={colors['base-text']}
              text="Embalagem mantém o café quentinho."
              icon={<Package size={20} weight="fill" />}
            />
            <InfoWithIcon
              iconBg={colors['brand-yellow']}
              text="Entrega rápida e rastreada."
              icon={<Timer size={20} weight="fill" />}
            />
            <InfoWithIcon
              iconBg={colors['brand-purple']}
              text="O café chega quentinho pra você."
              icon={<Coffee size={20} weight="fill" />}
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
