import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Provider } from 'react-redux';
import { Button, Welcome } from '@storybook/react/demo';
import { createBrowserHistory } from 'history';
import configureStore from '../store';

import  AppWrapper  from '../containers/App'
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, object, boolean, text, select, date, array, color } from '@storybook/addon-knobs';


const store = configureStore(createBrowserHistory);


storiesOf('代码示例', module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('empty App', withNotes('<h1>A very simple component</h1>')(() => <AppWrapper />));

storiesOf('代码示例', module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('info App', withInfo('<h1>A very simple component</h1>')(() => <AppWrapper />));


storiesOf('代码示例', module)
.addDecorator(withKnobs)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
.add('knobs App', () =><AppWrapper text={text('Label', 'Hello World')}></AppWrapper>)
.add('with all knobs', () => {
  const name = text('Name', 'Tom Cary');
  const dob = date('DOB', new Date('January 20 1887'));

  const bold = boolean('Bold', false);
  const selectedColor = color('Color', 'black');
  const favoriteNumber = number('Favorite Number', 42);
  const comfortTemp = number('Comfort Temp', 72, { range: true, min: 60, max: 90, step: 1 });

  const passions = array('Passions', ['Fishing', 'Skiing']);

  const customStyle = object('Style', {
    fontFamily: 'Arial',
    padding: 20,
  });

  const style = {
    ...customStyle,
    fontWeight: bold ? 800 : 400,
    favoriteNumber,
    color: selectedColor,
  };

  return (
    <div style={style}>
      I like: <ul>{passions.map((p, i) => <li key={i}>{p}</li>)}</ul>
      <p>My favorite number is {favoriteNumber}.</p>
      <p>My most comfortable room temperature is {comfortTemp} degrees Fahrenheit.</p>
    </div>
  );
});
