import React from 'react'
import { RegularText } from '../../../../components/Typography'
import { SectionTitleContainer } from './styles'

interface SectionTitlePrpos {
  title: string
  subtitle: string
  icon: React.ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitlePrpos) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </SectionTitleContainer>
  )
}
