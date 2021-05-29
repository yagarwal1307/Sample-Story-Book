import { Meta, Story } from '@storybook/angular/types-6-0';

import { PageNotFoundComponent } from './page-not-found.component';

export default {
  title: 'Mywebsite/components/404',
  component: PageNotFoundComponent
} as Meta

const Template: Story<PageNotFoundComponent> = (args: PageNotFoundComponent) => ({
  props: args
})

export const page404 = Template.bind({});
