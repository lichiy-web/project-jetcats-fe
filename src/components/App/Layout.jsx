import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/contacts/selectors';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';

const Layout = () => {
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  return (
    <>
      {/* <AppBar /> */}
      {/* {error ? <ErrorMessage /> : <Outlet />} */}

      {/* <Loader isLoading={loading} /> */}
    </>
  );
};
export default Layout;
