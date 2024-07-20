import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HuaweiPage from './Pages/HuaweiPage/HuaweiPage';
import DebianPage from './Pages/DebianPage/DebianPage';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/huawei" element={<HuaweiPage />} />
          <Route path="/debian" element={<DebianPage />} />
          {/* <Route path="*" element={<MainPage />} /> */}
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
