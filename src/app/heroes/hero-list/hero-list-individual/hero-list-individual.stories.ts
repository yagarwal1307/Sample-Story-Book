import {Meta, Story} from '@storybook/angular/types-6-0'
import {moduleMetadata} from '@storybook/angular'

import { HeroListIndividualComponent } from './hero-list-individual.component'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'


export default {
  title: 'MyWebsite/Components/heroes/listIndiv',
  component: HeroListIndividualComponent,
  argTypes: {
    hero: {
      control: {type: 'object'}
    },
    selectedId: {
      control: {type: 'number'}
    }
  },
  decorators: [
    moduleMetadata({
      declarations: [HeroListIndividualComponent],
      imports: [FormsModule, CommonModule]
    })
  ]
} as Meta

const Template: Story<HeroListIndividualComponent> = (args: HeroListIndividualComponent) => ({
  props: args
})

export const heroListIndividualSelected = Template.bind({});
heroListIndividualSelected.args = {
  hero:{
    name: 'Yash',
    id: 1
  },
  selectedId: 1
}

export const heroListIndividualUnselected = Template.bind({});
heroListIndividualUnselected.args = {
  ...heroListIndividualSelected.args,
  selectedId: 0
}