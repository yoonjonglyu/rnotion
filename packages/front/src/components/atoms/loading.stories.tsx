import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loading from './loading';
export default {
  title: '리로션/UI/Atoms/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const template: ComponentStory<typeof Loading> = props => (
  <Loading {...props} />
);

export const 로딩바 = template.bind({});
로딩바.args = {};
