import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

import Main from 'Main';

ReactDOM.render(
  <FluentProvider theme={teamsLightTheme}>
    <Main />
  </FluentProvider>,
  document.getElementById('root'),
);
