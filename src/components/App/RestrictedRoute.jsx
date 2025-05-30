import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsAuthLoadding,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthLoadding = useSelector(selectIsAuthLoadding);
  if (isAuthLoadding) return null;
  console.log('In RestrictedRoute: ', {
    isAuthLoadding,
    isRefreshing,
    isLoggedIn,
    redirectTo,
    Component,
  });
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
