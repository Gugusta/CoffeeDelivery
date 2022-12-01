import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-weight: 700;
  padding: 0.75rem;
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  color: ${({ theme }) => theme.colors['base-white']};
  background: ${({ theme }) => theme.colors['brand-yellow']};
  border-radius: 6px;
  border: none;
  text-transform: uppercase;
  line-height: 1.3rem;
  transition: 0.4s;
  margin-top: 0.7rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`
