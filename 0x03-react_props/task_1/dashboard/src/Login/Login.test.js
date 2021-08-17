import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login />);

it('crashing', () => {
  shallow(<Login />);
});

it('renders', () => {
  expect(wrapper.find('main.login').exists()).toEqual(true);
  expect(wrapper.find('main.login input')).toHaveLength(2);
  expect(wrapper.find('main.login label')).toHaveLength(2);
});
