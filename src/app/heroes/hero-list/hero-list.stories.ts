import {Meta, Story} from '@storybook/angular/types-6-0'
import {moduleMetadata} from '@storybook/angular'
import {of} from 'rxjs'
import { object as knobObject, withKnobs } from '@storybook/addon-knobs'

import { HeroListComponent } from './hero-list.component'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { HeroListIndividualComponent } from './hero-list-individual/hero-list-individual.component'


export default {
  title: 'MyWebsite/Components/heroes/list',
  component: HeroListComponent,
  argTypes: {
    selectedId: {
      control: {type: 'number'}
    }
  },
  decorators: [
    moduleMetadata({
      declarations: [HeroListIndividualComponent],
      imports: [FormsModule, CommonModule]
    }),
    withKnobs  
  ]
} as Meta

const Template: Story<HeroListComponent> = (args: HeroListComponent) => {
  const heroes = knobObject('heroList', [
    {
      id: 1,
      name: 'yash'
    },
    {
      id: 2,
      name: 'yaman'
    },
    {
      id: 3,
      name: 'vikram'
    },
  ]);
  return ({
    props: {
      ...args, 
      heroes$: of(heroes)}
  })
}

export const heroList = Template.bind({});
heroList.args = {
  selectedId: 1
}