import {Meta, Story} from '@storybook/angular/types-6-0'
import {moduleMetadata} from '@storybook/angular'
import {of} from 'rxjs'
import { object as knobObject, withKnobs } from '@storybook/addon-knobs'

import { HeroDetailComponent } from './hero-detail.component'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'


export default {
  title: 'MyWebsite/Components/heroes/detail',
  component: HeroDetailComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, CommonModule]
    }),
    withKnobs  
  ]
} as Meta

const Template: Story<HeroDetailComponent> = (args: HeroDetailComponent) => {
  const hero = knobObject('heroDetail', {
    id: 1,
    name: 'yash'
  });
  return ({
    props: {
      ...args, 
      hero$: of(hero)}
  })
}

export const heroDetail = Template.bind({});
heroDetail.args = {}