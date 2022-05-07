import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WorkspaceFeature from '.';

export default {
  title: '리로션/Feature/Workspace',
  component: WorkspaceFeature,
  decorators: [
    Story => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as ComponentMeta<typeof WorkspaceFeature>;

const template: ComponentStory<typeof WorkspaceFeature> = props => (
  <WorkspaceFeature {...props} />
);

export const 작업공간 = template.bind({});
작업공간.args = {};
