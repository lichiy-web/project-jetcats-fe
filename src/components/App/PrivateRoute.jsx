import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsAuthLoadding,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoadding = useSelector();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthLoadding = useSelector(selectIsAuthLoadding);
  if (isAuthLoadding) return null;
  console.log('In PrivateRoute: ', {
    isAuthLoadding,
    isRefreshing,
    isLoggedIn,
    redirectTo,
    Component,
  });
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
