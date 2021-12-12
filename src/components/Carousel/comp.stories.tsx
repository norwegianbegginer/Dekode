/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import CustomCarousel from './index';

export default {
  title: `Example/CustomCarousel`,
  component: CustomCarousel,
  argTypes: {},
} as ComponentMeta<typeof CustomCarousel>;

const Template: ComponentStory<typeof CustomCarousel> = (args) => (
  <CustomCarousel {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  children: <div>sued xe rolod tema tis muspi meroL</div>,
};
