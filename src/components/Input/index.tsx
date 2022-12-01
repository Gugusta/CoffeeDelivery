import { forwardRef, InputHTMLAttributes } from 'react'
import { RegularText } from '../Typography'
import {
  InputStyleScontainer,
  InputWrapper,
  RightText,
  InputStyled,
} from './styles'

type InputPropos = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  ClassName?: string
  rightText?: string
  hasError?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputPropos>(
  ({ error, className, rightText, hasError, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleScontainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleScontainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)

Input.displayName = 'Input'
