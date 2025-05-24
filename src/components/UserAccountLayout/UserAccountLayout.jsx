import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
// import HomeTab from '../HomeTab/HomeTab';
import SideBar from '../SideBar/SideBar';

const UserAccountLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default UserAccountLayout;
