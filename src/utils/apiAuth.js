import { setToken } from "./token";

// const baseUrl = "https://auth.nomoreparties.co";

// export function authorize(password, email) {
//   return fetch(`${baseUrl}/signin`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ password, email }),
//   })
//     .then((res) => {
//       if (!res.ok) {
//         return Promise.reject(`Ошибка: ${res.status}`);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       if (data.token) {
//         setToken(data.token);
//         return data;
//       } else {
//         return;
//       }
//     })
//     .catch((err) => console.log(err));
// }
// export function register(userData) {
//   return apiAuth.signup(userData);
// }

// export function getContent(token) {
//   return apiAuth.validateToken(token);
// }

class ApiAuth {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  _checkResponse(res) {
    // console.log("началась проверка ответа");
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    // console.log("выход и проверки - статус ответа ок");
    return res.json();
  }

  authorize(password, email) {
    // console.log("запуск запроса");
    // console.log("url is ", `${this.baseUrl}/signin`);
    // console.log("данные для отправки ", password, email);
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, email }),
    })
      .then(this._checkResponse)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          return data;
        } else {
          console.log("NO token in response from authorize");
          return;
        }
      })
      .catch((err) => console.log(err));
  }

  signup(userData) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }).then(this._checkResponse);
  }

  validateToken(jwt) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkResponse);
  }
}

export const apiAuth = new ApiAuth("https://auth.nomoreparties.co");
