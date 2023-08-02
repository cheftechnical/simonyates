import {addDecorator} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import DefaultTheme from '../src/styling/DefaultTheme';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(storyFn => (
  <Router>
    <DefaultTheme>
      {storyFn()}
    </DefaultTheme>
  </Router>
));
