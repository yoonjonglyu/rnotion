import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './button';
export default {
  title: '리로션/UI/Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const template: ComponentStory<typeof Button> = props => (
  <Button {...props} />
);

export const 버튼 = template.bind({});
버튼.args = {
  color: '',
  children: '버튼'
};
