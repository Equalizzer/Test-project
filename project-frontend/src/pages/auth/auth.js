import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

export default [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Registration', component: Register },
  { path: '/forgot-password', name: 'Forgot', component: ForgotPassword },
]

