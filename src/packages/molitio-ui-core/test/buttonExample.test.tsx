import React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonExample } from '../src';

describe('Thing', () => {
  it('renders without crashing', () => {
    const props = {
      primary: true,
      label: 'test',
    };
    const div = document.createElement('div');
    ReactDOM.render(<ButtonExample props={props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
