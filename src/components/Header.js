import React from "react";
import logoPath from "../images/logo.svg";

function Header() {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logoPath} alt="логотип проекта Место Россия" />
    </header>
  );
}

export default Header;
