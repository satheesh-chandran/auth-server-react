import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../components/Input';
import '@testing-library/jest-dom/extend-expect';

import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('should render input without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
});

it('placeholder testing', () => {
  const { getByPlaceholderText, getByDisplayValue } = render(
    <Input placeholder='hello' value='name' />
  );
  expect(getByPlaceholderText('hello'));
  expect(getByDisplayValue('name'));
});

it('Input snapshot', () => {
  const tree = renderer
    .create(<Input placeholder='hello' value='name' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
