import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

it('render', () => {
  shallow(<App />);
});

it('App-header', () => {
  expect(wrapper.find('header.App-header').exists()).toEqual(true);
});
it('App-body', () => {
  expect(wrapper.find('main.App-body').exists()).toEqual(true);
});
it('App-footer', () => {
  expect(wrapper.find('footer.App-footer').exists()).toEqual(true);
});