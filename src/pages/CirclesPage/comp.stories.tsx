/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import CirclesPage from './index';

export default {
  title: `Example/CirclesPage`,
  component: CirclesPage,
  argTypes: {},
} as ComponentMeta<typeof CirclesPage>;

const Template: ComponentStory<typeof CirclesPage> = (args) => (
  <CirclesPage {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  children: <div>sued xe rolod tema tis muspi meroL</div>,
};
