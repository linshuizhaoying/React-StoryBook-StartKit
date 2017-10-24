import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

function loadStories() {
  require('../src/stories');
}
setOptions({
  downPanelInRight: true,
})
configure(loadStories, module);
