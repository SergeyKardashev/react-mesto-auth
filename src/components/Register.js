import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/token";

function Register({ onSubmit }) {
  //
  const navigate = useNavigate();

  // добавил после вебинара
  // useEffect(() => {
  //   console.log("токен чек и если ок, то редирект из регистрации");
  //   if (getToken()) {
  //     navigate("/");
  //   }
  // }, []);

  const [formValue, setFormValue] = useState({ email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handleSubmitRegister(e) {
    e.preventDefault();
    onSubmit(formValue);
  }

  return (
    <div className="auth">
      <h1 className="auth__header">Регистрация</h1>
      <form onSubmit={handleSubmitRegister} className="auth__form">
        <fieldset className="auth__fieldset">
          <input
            name="email"
            onChange={handleChange}
            value={formValue.email}
            className="auth__input"
            placeholder="Email"
            type="email"
            required
          ></input>
          <input
            name="password"
            onChange={handleChange}
            value={formValue.password}
            className="auth__input"
            placeholder="Пароль"
            type="password"
            required
          ></input>
        </fieldset>
        <button type="submit" className="auth__button">
          Зарегистрироваться
        </button>
        <p className="auth__paragraph">
          Уже зарегистрированы?
          <Link to="/sign-in" className="auth__paragraph-link">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
