import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BasicLayout from './basicLayout';

export default {
  title: '리로션/UI/Layouts/BasicLayout',
  component: BasicLayout,
  decorators: [
    Story => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as ComponentMeta<typeof BasicLayout>;

const template: ComponentStory<typeof BasicLayout> = props => <BasicLayout {...props} />;

export const Basic = template.bind({});
Basic.args = {
  header: <h1>해드라인</h1>,
  children: <div>기본 레이아웃</div>
};
