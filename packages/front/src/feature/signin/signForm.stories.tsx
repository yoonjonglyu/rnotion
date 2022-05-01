import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignForm from './signForm';

export default {
  title: '리로션/Feature/Signin/SignForm',
  component: SignForm,
  decorators: [
    Story => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as ComponentMeta<typeof SignForm>;

const template: ComponentStory<typeof SignForm> = props => (
  <SignForm {...props} />
);

export const 로그인폼 = template.bind({});
로그인폼.args = {};
