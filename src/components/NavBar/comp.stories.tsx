/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import NavBar from './index';

export default {
  title: `Example/NavBar`,
  component: NavBar,
  argTypes: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
