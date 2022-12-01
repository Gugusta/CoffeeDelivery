import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffes'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeList, OurCoffeesContainer } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Cafés
      </TitleText>
      <CoffeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeList>
    </OurCoffeesContainer>
  )
}
