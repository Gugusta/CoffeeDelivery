import styled from 'styled-components'

interface IconsContainerProps {
  iconBg: string
}

export const ItemWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const IconContainer = styled.div<IconsContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ iconBg }) => iconBg};
`
