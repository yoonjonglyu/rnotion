import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ALink from './aLink';

export default {
  title: '리로션/UI/Atoms/ALink',
  component: ALink,
  decorators: [
    Story => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as ComponentMeta<typeof ALink>;

const template: ComponentStory<typeof ALink> = props => <ALink {...props} />;

export const 링크 = template.bind({});
링크.args = {
  color: '',
  to: './',
  children: '링크',
};
