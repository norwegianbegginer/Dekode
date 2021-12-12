/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import CaruseleItem from './index';

export default {
  title: `Example/CaruseleItem`,
  component: CaruseleItem,
  argTypes: {},
} as ComponentMeta<typeof CaruseleItem>;

const Template: ComponentStory<typeof CaruseleItem> = (args) => (
  <CaruseleItem {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  children: <div>sued xe rolod tema tis muspi meroL</div>,
};
