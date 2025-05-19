import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
// import { useSelector } from 'react-redux';
// import { selectError, selectLoading } from '../redux/contacts/selectors';
// import Loader from './Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SideBar from '../SideBar/SideBar';

const UserAccountLayout = () => {
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const error = '';
  return (
    <>
      <Header />
      <SideBar />
      {error ? <ErrorMessage /> : <Outlet />}
      {/* <Loader isLoading={loading} /> */}
    </>
  );
};
export default UserAccountLayout;
