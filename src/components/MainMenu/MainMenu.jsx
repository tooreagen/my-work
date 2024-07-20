import MenuItem from 'components/MenuItem/MenuItem';
import { Navigation } from './MainMenuStyled';

const menuArray = [
  {
    id: 1,
    header: 'Huawei',
    url: '/huawei',
  },
  {
    id: 2,
    header: 'Debian',
    url: '/debian',
  },
];

const MainMenu = () => {
  return (
    //Navigation (tag nav)
    <Navigation>
      {menuArray.map(item => {
        return (
          <MenuItem
            key={item.id}
            url={item.url}
            header={item.header}
          />
        );
      })}
    </Navigation>
  );
};

export default MainMenu;
