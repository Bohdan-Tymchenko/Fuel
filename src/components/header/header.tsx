// absolute imports
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderContainer, Nav, BurgerIcon } from "./headerStyles";

// relative imports
import Logo from "../logo";

// component
const Header: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string | undefined>("/");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveTab(currentPath);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo />
      <BurgerIcon onClick={toggleMenu}>&#9776;</BurgerIcon>
      <Nav className={isOpen ? 'open' : ''}>
        <Link to="/" className={activeTab === "/" ? "active" : ""}>
          DASHBOARD
        </Link>
        <Link to="/trade" className={activeTab === "/trade" ? "active" : ""}>
          Trade
        </Link>
        <Link to="/earn" className={activeTab === "/earn" ? "active" : ""}>
          Earn
        </Link>
        <Link to="/faucet" className={activeTab === "/faucet" ? "active" : ""}>
          Faucet
        </Link>
        <Link to="/docs" className={activeTab === "/docs" ? "active" : ""}>
          Docs
        </Link>
        <Link to="/more" className={activeTab === "/more" ? "active" : ""}>
          More
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
