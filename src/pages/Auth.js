import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AUTH_ROUTE, HOMEPAGE_ROUTE } from "./components/utils/consts";
import "./Auth.css";

export const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === AUTH_ROUTE;
    const [showFalse, setShowFalse] = useState(false)

    const [player, setPlayer] = React.useState([]);
    const fetchDataPlayer = () => {
        fetch("https://cdn.lk-ft.ru/footballers")
            .then((response) => response.json())
            .then((data) => {
                setPlayer(data);
            });
    };
    React.useEffect(() => {
        fetchDataPlayer();
    }, []);

    const handleSubmit = (event) => {
        let email_user = [];
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        for (let [key, value] of formData.entries()) {
            email_user.push(value);
        }

        player.map((e, i) => {
            //console.log(e);
            if (email_user[0] == "support" && email_user[1] == "Support1234") {
                window.open("https://dev.lk-ft.ru/login", "_self");
            }

            if (email_user[0] == e.f_email && email_user[1] == e.f_password) {
                //console.log("Найдено совпадение ", e.id , " Пользователь :", e.lastname )
                //console.log(HOMEPAGE_ROUTE)
                window.open(HOMEPAGE_ROUTE + "/" + e.id, "_self");
            }
            else {
                setShowFalse(true);
            }
        });
    };

    return (
        <section class="auth-backround">
            <form class="auth-form" onSubmit={handleSubmit}>
                <img id="auth-logo" src="/images/logo/logo-header.svg" alt="logo with black letters" />
                <label className="auth-input-label">
                    <span>Почта</span>
                    <input
                        className="auth-input"
                        type="text"
                        name="username"
                        placeholder="Введите почту"
                    />
                </label>
                <label className="auth-input-label">
                    <span>Пароль</span>
                    <input
                        className="auth-input"
                        type="password"
                        name="password"
                        placeholder="Введите пароль"
                    />
                </label>
                <button className="auth-button" type="submit">
                    <span>Войти</span>
                </button>
                {
                    (showFalse) ? <span class="show-false">Неправильный логин или пароль</span> : <></>
                }
            </form>
        </section>
    );
};