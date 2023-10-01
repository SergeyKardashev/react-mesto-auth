import React from "react";
import logoPath from "../images/logo.svg";
import { Link, Route, Routes, useLocation } from "react-router-dom";

function Header(props) {
  let location = useLocation();

  let linkMarkUp = "";

  if (location.pathname === "/") {
    linkMarkUp = (
      <span onClick={props.onSignOut} className="header__profile header__profile_dimmed">
        Выйти
      </span>
    );
  }

  if (location.pathname === "/sign-up") {
    linkMarkUp = (
      <Link to="/sign-in" replace className="header__profile">
        Войти
      </Link>
    );
  }

  if (location.pathname === "/sign-in") {
    linkMarkUp = (
      <Link to="/sign-up" replace className="header__profile">
        Регистрация
      </Link>
    );
  }

  return (
    // <header className="header page__header">
    //   <img className="header__logo" src={logoPath} alt="лого проекта Место" />
    //   <Routes>
    //     <Route path="/">
    //       <p className="header__profile">
    //         <span className="header__profile-email">{props.email}</span>
    //         <span onClick={props.onSignOut} className="header__profile header__profile_dimmed">
    //           Выйти
    //         </span>
    //       </p>
    //     </Route>
    //   </Routes>
    // </header>
    <header className="header page__header">
      <img className="header__logo" src={logoPath} alt="лого проекта Место" />
      <p className="header__profile">
        <span className="header__profile-email">{props.email}</span>
        {linkMarkUp}
      </p>
    </header>
  );
}

export default Header;
