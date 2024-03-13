import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

import App from './App';

ReactDOM.render(
    <FluentProvider theme={teamsLightTheme}>
        <App />
    </FluentProvider>,
    document.getElementById('root'),
);

reportWebVitals(sendToVercelAnalytics);
