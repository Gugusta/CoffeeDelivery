import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const coffeesTotal = formatMoney(cartItemsTotal)
  const cartTotal = formatMoney(cartItemsTotal + DELIVERY_PRICE)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>{coffeesTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>{formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" size="l" color="subtitle">
          Total
        </RegularText>
        <RegularText weight="700" size="l" color="subtitle">
          {cartTotal}
        </RegularText>
      </div>
      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
