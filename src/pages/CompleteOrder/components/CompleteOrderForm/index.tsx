import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Comple seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu produto"
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
          title="Pagamento"
          subtitle="O pagamento será feito na entrega. Escolha a forma que deseja pagar"
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
