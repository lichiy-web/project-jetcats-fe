import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/slectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = false;

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
