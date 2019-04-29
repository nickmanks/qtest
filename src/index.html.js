import React from 'react';
import {Provider} from 'react-redux';
import {Module, Scripts, Styles} from 'react-entry-loader/injectors';
import {render} from 'react-entry-loader/render';
import {store} from './store';
import App from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import theme from './index.scss';

const containerId = 'root';

/* eslint react/prop-types: off */

const Html = ({scripts, styles})=> (
  <html>
    <head>
      <base href="/" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta
        name="viewport"
        content="
        width=device-width,
        initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,
        user-scalable=no, shrink-to-fit=no"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta httpEquiv="X-UA-Compatible" content="IE=11" />

      <Scripts files={scripts} async />
    </head>
    <body>
      <Styles files={styles} />

      <div id={containerId} className={theme.root}>
        <Module onLoad={(cmp)=> render(containerId)(cmp)}>
          <Provider store={store}>
            <App workaroundDependency={theme} />
          </Provider>
        </Module>
      </div>
    </body>
  </html>
);

export default Html;
