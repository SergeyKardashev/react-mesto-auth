import React, { useState, useEffect } from "react";
import { getToken } from "../utils/token";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const { onSubmit } = props;

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({ email: "", password: "" });

  useEffect(() => {
    setFormValue({ email: "", password: "" });
  }, []);

  // добавил после вебинара
  // useEffect(() => {
  //   console.log("токен чек и если ок, то редирект из логина");
  //   if (getToken()) {
  //     navigate("/");
  //   }
  // }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handleSubmitLogin(e) {
    const { password, email } = formValue;
    e.preventDefault();
    if (!password || !email) {
      console.log("oops - state is not full");
      return;
    }
    onSubmit(password, email);
  }

  return (
    <div className="auth">
      <h1 className="auth__header">Вход</h1>
      <form onSubmit={handleSubmitLogin} className="auth__form">
        <fieldset className="auth__fieldset">
          <input
            name="email"
            value={formValue.email}
            onChange={handleChange}
            className="auth__input"
            placeholder="Email"
            type="email"
            required
          ></input>
          <input
            name="password"
            value={formValue.password}
            onChange={handleChange}
            className="auth__input"
            placeholder="Пароль"
            type="password"
            required
          ></input>
        </fieldset>
        <button type="submit" className="auth__button">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
