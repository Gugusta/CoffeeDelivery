import { PaymentMethodContainer, ContentContainer } from './styles'
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, label, icon, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input type="radio" id={id} name="paymentMethod" {...props} ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})

PaymentMethodInput.displayName = 'PaymentMethodInput'
