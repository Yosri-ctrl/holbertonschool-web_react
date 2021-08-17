import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';


App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

function App({ isLoggedIn }) {
  let component = undefined;
  isLoggedIn ? (component = <CourseList />) : (component = <Login />);
  return (
    <>
      <Notifications />
      <Header />
      {component}
      <Footer />
    </>
  );
}

export default App;
