import { moduleMetadata } from '@storybook/angular'
import { Meta, Story} from '@storybook/angular/types-6-0';
import { NavButtonComponent } from './nav-button.component';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';

export default {
  title: 'MyWebsite/Components/Navbar/Navbutton',
  component: NavButtonComponent,
  argTypes: {
    navItem: {
      control: {type: 'object'}
    }
  },
  excludeStories: /.*Data$/
} as Meta;

export const actionsData = {
  clickEvent: action('clickEvent')
}

const Template: Story<NavButtonComponent> = (args: NavButtonComponent) => ({
  props: {...args, clickEvent: actionsData.clickEvent},
  decorators: [
    moduleMetadata({
      imports: [CommonModule]
    })
  ],
})

export const InactiveButton = Template.bind({});
InactiveButton.args = {
  navItem: {
    name: 'Inactive',
    link: '/inactive'
  }
}
InactiveButton.parameters = {
  angularRouter: {active: '/active'}
}

export const ActiveButton = Template.bind({});
ActiveButton.args = {
  navItem: {
    name: 'Active',
    link: '/active'
  }
}
ActiveButton.parameters = {
  ...InactiveButton.parameters
}