/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import Logo from './index';

export default {
  title: `Example/Logo`,
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  redirect: true,
};
