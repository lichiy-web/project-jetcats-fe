import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from '../../redux/auth/operations';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';
import Loader from '../Loader/Loader';
import HomeTab from '../HomeTab/HomeTab';
import DevPanel from '../DevPanel/DevPanel';
import StatisticsTab from '../StatisticsTab/StatisticsTab';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BalanceOverview from '../BalanceOverview/BalanceOverview';
import { selectIsLoading } from '../../redux/app/selectors';
import { isUndefined } from '../../utils/isDefined';

const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const UserAccountLayout = lazy(() =>
  import('../UserAccountLayout/UserAccountLayout')
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoadding = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(refreshUser(abortController.signal));
    return () => abortController.abort('Prevent request after App dismantling');
  }, [dispatch]);
  // console.log(
  //   `In App BEFORE return =>\n isUndefined = ${isUndefined(
  //     isRefreshing
  //   )},\n isRefreshing = ${isRefreshing},\n isLoggedIn = ${isLoggedIn}`
  // );
  return isUndefined(isRefreshing) ||
    isUndefined(isLoggedIn) ||
    isRefreshing ? (
    <Loader />
  ) : (
    <div className="main-container">
      <DevPanel />
      <Loader isLoading={isLoadding} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<UserAccountLayout />}
              />
            }
          >
            <Route index element={<HomeTab />} />
            <Route path="statistics" element={<StatisticsTab />} />
            <Route path="currency" element={<BalanceOverview />} />
          </Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
