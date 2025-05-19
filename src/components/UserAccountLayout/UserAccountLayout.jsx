import Header from '../Header/Header';
import HomeTab from '../HomeTab/HomeTab';
import SideBar from '../SideBar/SideBar';

const UserAccountLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <HomeTab />
      </div>
    </div>
  );
};

export default UserAccountLayout;
