import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: flex;
  color: var(--main-text-color);

  :hover:not(.active),
  :focus:not(.active) {
    background-color: #2c2c2e;
    transition-property: background-color;
    transition-duration: 500ms;
  }
`;

export const MenuItemStyle = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* flex-grow: 1; */
  width: 100px;
  padding: 10px 4px;
  background-color: #1c1c1e;
  border-radius: 16px;

  :hover,
  :focus {
    background-color: #2c2c2e;
  }

  ${({ isActive }) => isActive && `background-color: var(--accent-color);`}
`;

export const MenuIcon = styled.svg`
  /* stroke: #3e85f3; */
  fill: var(--accent-color);
  width: 26px;
  height: 26px;

  ${({ isActive }) => isActive && `fill: #1c1c1e;`}
`;

export const MenuHeader = styled.p`
  text-align: center;

  /* ${({ isActive }) => isActive && `color: #1c1c1e;`} */
`;
