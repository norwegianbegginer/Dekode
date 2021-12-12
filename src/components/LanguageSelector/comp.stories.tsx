/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Project scoped imports.

// Component scoped imports.
import LanguageSelector from './index';

export default {
  title: `Example/LanguageSelector`,
  component: LanguageSelector,
  argTypes: {},
} as ComponentMeta<typeof LanguageSelector>;

const Template: ComponentStory<typeof LanguageSelector> = (args) => (
  <LanguageSelector {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  children: <div>sued xe rolod tema tis muspi meroL</div>,
};
