import { Outlet, ScrollRestoration, Scripts } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './shared/styles/index.scss';

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Make Decisions</title>
      </head>
      <body>
        <Provider store={store}>
          <Outlet />
        </Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
