/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import PersonCard from './index';

export default {
  title: `Example/PersonCard`,
  component: PersonCard,
  argTypes: {},
} as ComponentMeta<typeof PersonCard>;

const Template: ComponentStory<typeof PersonCard> = (args) => (
  <PersonCard {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  children: <div>sued xe rolod tema tis muspi meroL</div>,
};
