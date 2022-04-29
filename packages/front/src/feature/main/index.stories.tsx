import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainFeature from '.';

export default {
  title: '리로션/Feature/Main',
  component: MainFeature,
} as ComponentMeta<typeof MainFeature>;

const template: ComponentStory<typeof MainFeature> = props => <MainFeature {...props} />;

export const 메인 = template.bind({});
메인.args = {};
