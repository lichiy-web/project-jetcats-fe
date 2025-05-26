import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/transactions/selectors';
import SideBar from '../SideBar/SideBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const UserAccountLayout = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  // const error = '';
  return (
    <>
      <Header />
      <SideBar />
      {error ? <ErrorMessage /> : <Outlet />}
      <Loader isLoading={loading} />
    </>
  );
};
export default UserAccountLayout;
