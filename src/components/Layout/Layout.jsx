import Header from 'components/Header/Header';
import { Container } from './LayoutStyled';
import { Outlet } from 'react-router-dom';
import MainMenu from 'components/MainMenu/MainMenu';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <MainMenu />
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
