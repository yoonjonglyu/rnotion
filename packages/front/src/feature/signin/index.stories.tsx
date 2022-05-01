import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SigninFeature from '.';

export default {
  title: '리로션/Feature/Signin',
  component: SigninFeature,
  decorators: [
    Story => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as ComponentMeta<typeof SigninFeature>;

const template: ComponentStory<typeof SigninFeature> = props => (
  <SigninFeature {...props} />
);

export const 로그인 = template.bind({});
로그인.args = {};
