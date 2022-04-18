import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Intro from './intro';

export default {
  title: '리로션/Feature/Main/Intro',
  component: Intro,
} as ComponentMeta<typeof Intro>;

const template: ComponentStory<typeof Intro> = props => <Intro {...props} />;

export const 인트로 = template.bind({});
인트로.args = {};
