import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('In PrivateRoute: ', { isLoggedIn, redirectTo, Component });
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
