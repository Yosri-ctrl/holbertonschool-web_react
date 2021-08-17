import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const wrapper = shallow(<Header />);

it('crashing', () => {
  shallow(<Header />);
});

it('render', () => {
  expect(wrapper.find('header.header').exists()).toEqual(true);
});