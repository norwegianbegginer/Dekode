/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import PurpleCirclesPage from './index';

export default {
  title: `Example/PurpleCirclesPage`,
  component: PurpleCirclesPage,
  argTypes: {},
} as ComponentMeta<typeof PurpleCirclesPage>;

const Template: ComponentStory<typeof PurpleCirclesPage> = (args) => (
  <PurpleCirclesPage {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  children: <div>sued xe rolod tema tis muspi meroL</div>,
};
