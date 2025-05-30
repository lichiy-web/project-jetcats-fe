import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsAuthLoadding,
  selectIsLoggedIn,
} from '../../redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const location = useLocation();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAuthLoadding = useSelector(selectIsAuthLoadding);
  if (isAuthLoadding) return null;
  // console.log('In PrivateRoute: ', {
  //   isAuthLoadding,
  //   isRefreshing,
  //   isLoggedIn,
  //   redirectTo,
  //   Component,
  // });
  return isLoggedIn ? (
    Component
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  );
};
