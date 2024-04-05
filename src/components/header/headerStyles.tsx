// absolute imports
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: #050505;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 60px;
  left: -100%;
  bottom: 0;
  width: 100%;
  background: #050505;
  transition: left 0.3s ease-in-out;
  z-index: 1;
  @media screen and (min-width: 769px) {
    display: block;
    left: 0;
    top: 0;
    flex-direction: row;
    position: relative;
    width: auto;
  }
  &.open {
    left: 0;
  }

  a {
    color: #fff;
    padding: 12px 5px;
    margin: 0 14px;
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    &.active,
    &:hover {
      text-decoration: none;
      &:after {
        position: absolute;
        content: '';
        width: 100%;
        bottom: 0;
        left: 0;
        background: #fff;
        height: 2px;
      }
    }
  }
`;

export const BurgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    z-index: 2;
  }
`;