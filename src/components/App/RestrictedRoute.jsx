import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsAuthLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAuthLoadding = useSelector(selectIsAuthLoading);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isAuthLoadding) return null;
  console.log('In RestrictedRoute: ', {
    isAuthLoadding,
    isRefreshing,
    isLoggedIn,
    redirectTo,
    Component,
  });
  return isLoggedIn ? (
    <Navigate to={/*location.state?.from?.pathname || */ redirectTo} replace />
  ) : (
    Component
  );
};
