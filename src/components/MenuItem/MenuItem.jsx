import { MenuItemStyle, MenuHeader, NavigationLink } from './MenuItemStyled';

const MenuItem = ({ url, header }) => {
  return (
    <NavigationLink to={url}>
      {({ isActive }) => (
        <MenuItemStyle isActive={isActive}>
          <MenuHeader isActive={isActive}>{header}</MenuHeader>
        </MenuItemStyle>
      )}
    </NavigationLink>
  );
};

export default MenuItem;
