import React from 'react';
import { RouteObject } from 'react-router-dom';

import WorkspaceFeature from '../feature/workspace';

const WorkspacePage: RouteObject = {
  path: 'workspace',
  element: <WorkspaceFeature />,
  children: [],
};

export default WorkspacePage;
