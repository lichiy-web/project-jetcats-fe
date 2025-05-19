import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
// import { useSelector } from 'react-redux';
// import { selectError, selectLoading } from '../redux/contacts/selectors';
// import Loader from './Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Layout = () => {
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const error = '';
  return (
    <>
      <Header />
      {error ? <ErrorMessage /> : <Outlet />}
      {/* <Loader isLoading={loading} /> */}
    </>
  );
};
export default Layout;
