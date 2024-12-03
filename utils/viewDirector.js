import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import navBar from '../components/navBar';
import client from './client';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      document.querySelector('#login-form-container').innerHTML = '';
      document.querySelector('#app').innerHTML = '';
      navBar();
    } else {
      // person is NOT logged in
      document.querySelector('#navigation').innerHTML = '';
      document.querySelector('#app').innerHTML = '';
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
