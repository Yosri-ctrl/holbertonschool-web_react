import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

it('crashing', () => {
  shallow(<Notifications />);
});

it('renders', () => {
  expect(wrapper.find('li').children().length).toEqual(3);
  expect(
    wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
  ).toBeTruthy();
});