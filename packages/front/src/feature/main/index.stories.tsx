import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainFeature from '.';

export default {
  title: '리로션/Feature/Main',
  component: MainFeature,
  decorators: [
    Story => (
      <RecoilRoot>
        <Router>
          <Story />
        </Router>
      </RecoilRoot>
    ),
  ],
} as ComponentMeta<typeof MainFeature>;

const template: ComponentStory<typeof MainFeature> = props => (
  <MainFeature {...props} />
);

export const 메인 = template.bind({});
메인.args = {};
