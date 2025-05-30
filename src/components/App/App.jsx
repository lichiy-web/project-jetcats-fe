import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import Loader from '../Loader/Loader';
import HomeTab from '../HomeTab/HomeTab';
import DevPanel from '../DevPanel/DevPanel';
import StatisticsTab from '../StatisticsTab/StatisticsTab';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BalanceOverview from '../BalanceOverview/BalanceOverview';
import { selectIsLoading } from '../../redux/app/selectors';

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

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
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
