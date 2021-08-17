import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login />);

it('crashing', () => {
  shallow(<Login />);
});
it('render', () => {
  expect(wrapper.find('main.login').exists()).toEqual(true);
});
