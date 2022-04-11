import React from 'react';
import { Route } from 'react-router-dom';

import WorkspaceFeature from '../feature/workspace';

const WorkspacePage: React.FC = () => {
  return <Route path="workspace" element={WorkspaceFeature} />;
};

export default WorkspacePage;
