import { moduleMetadata } from '@storybook/angular'
import { Meta, Story } from '@storybook/angular/types-6-0';

import { NavbarComponent } from './navbar.component';
import { NavButtonComponent } from './nav-button/nav-button.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

export default {
  title: 'MyWebsite/Components/Navbar/Navbar',
  component: NavbarComponent,
  argTypes: {
    navLinks: {
      control: {type: 'array'}
    }
  },
  decorators: [
    moduleMetadata({
      declarations: [NavButtonComponent],
      imports: [FormsModule, CommonModule]
    })
  ]
} as Meta

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args
})

export const Navbar = Template.bind({});
Navbar.args = {
  navLinks: [
    {link: '/crisis-center', name: 'Crisis Center'},
    {link: '/heroes', name: 'Heroes'},
  ]
}
Navbar.parameters = {
  angularRouter: {active: '/crisis-center'}
}