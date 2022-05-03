import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RegisterForm from './registerForm';

export default {
  title: '리로션/Feature/Signup/RegisterForm',
  component: RegisterForm,
  decorators: [
    Story => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as ComponentMeta<typeof RegisterForm>;

const template: ComponentStory<typeof RegisterForm> = props => (
  <RegisterForm {...props} />
);

export const 회원가입폼 = template.bind({});
회원가입폼.args = {};
