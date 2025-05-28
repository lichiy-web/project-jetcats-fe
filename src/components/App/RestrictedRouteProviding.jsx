import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const RestrictedRouteProviding = ({
  condition = false,
  component: Component,
  redirectTo = '/',
}) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log({ isLoggedIn, redirectTo, Component });
  return condition ? <Navigate to={redirectTo} /> : Component;
};
