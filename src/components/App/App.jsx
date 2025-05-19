import './App.css';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
// import { refreshUser } from '../redux/auth/operations';
// import { selectIsRefreshing } from '../redux/auth/slectors';
import HomePage from '../../pages/HomePage';

const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const StatisticsPage = lazy(() => import('../../pages/StatisticsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const Layout = lazy(() => import('./Layout'));

function App() {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);
  const isRefreshing = false;

  return isRefreshing ? (
    <Loader isLoading={true} />
  ) : (
    <div className="main-container">
      <Suspense fallback={<Loader isLoading={true} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              path="home"
              element={
                <PrivateRoute redirectTo="/login" component={<HomePage />} />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="statistics"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<StatisticsPage />}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
