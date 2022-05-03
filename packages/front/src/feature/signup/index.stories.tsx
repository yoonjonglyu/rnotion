import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignupFeature from '.';

export default {
  title: '리로션/Feature/Signup',
  component: SignupFeature,
  decorators: [
    Story => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as ComponentMeta<typeof SignupFeature>;

const template: ComponentStory<typeof SignupFeature> = props => (
  <SignupFeature {...props} />
);

export const 회원가입 = template.bind({});
회원가입.args = {};
