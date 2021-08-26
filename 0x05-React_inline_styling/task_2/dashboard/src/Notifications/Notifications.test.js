import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

it('crashing notification', () => {
  shallow(<Notifications />);
});
it('items list', () => {
  expect(wrapper.find('li').children().length).toEqual(3);
});
it('<p>', () => {
  expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBeTruthy();
});
