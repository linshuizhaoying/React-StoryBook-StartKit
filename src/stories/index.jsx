import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Provider } from 'react-redux';
import { Button, Welcome } from '@storybook/react/demo';
import { createBrowserHistory } from 'history';
import configureStore from '../store';

import  AppWrapper  from '../containers/App'

const store = configureStore(createBrowserHistory);

storiesOf('AppWrapper', module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('empty App', () => <AppWrapper />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
