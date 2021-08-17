import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

it('crashing', () => {
  shallow(<Footer />);
});
it('render', () => {
  expect(wrapper.find('footer.footer').exists()).toEqual(true);
});
