/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import ImgBoxWithCard from './index';

export default {
  title: `Example/ImgBoxWithCard`,
  component: ImgBoxWithCard,
  argTypes: {},
} as ComponentMeta<typeof ImgBoxWithCard>;

const Template: ComponentStory<typeof ImgBoxWithCard> = (args) => (
  <ImgBoxWithCard {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  children: <div>sued xe rolod tema tis muspi meroL</div>,
};
