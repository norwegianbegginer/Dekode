/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import SocialMedia from './index';

export default {
  title: `Example/SocialMedia`,
  component: SocialMedia,
  argTypes: {},
} as ComponentMeta<typeof SocialMedia>;

const Template: ComponentStory<typeof SocialMedia> = (args) => (
  <SocialMedia {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  children: <div>sued xe rolod tema tis muspi meroL</div>,
};
