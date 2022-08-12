import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AUTH_ROUTE, HOMEPAGE_ROUTE } from "./components/utils/consts";
import "./Auth.css";

export const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === AUTH_ROUTE;
    const [showFalse, setShowFalse] = useState(false)

    const [loginData, setLoginData] = useState([]);

    const [player, setPlayer] = React.useState([]);
    const fetchDataPlayer = (email) => {
        fetch(`https://cdn.lk-ft.ru/footballers?f_email_eq=${email[0]}`)
            .then((response) => response.json())
            .then((data) => {
                setPlayer(data);
            })
    };
    React.useEffect(() => {
        if (loginData != []) { fetchDataPlayer(loginData); }
        // console.log(player)
    }, [loginData]);

    React.useEffect(() => {
        if (player.length == 0 && loginData.length != 0) {
            setShowFalse(true);
        }
        if (player.length != 0 && loginData.length != 0) {
            if (loginData[0] == "support" && loginData[1] == "Support1234") {
                window.open("https://admin.lk-ft.ru/login", "_self");
            }
            if (loginData[1] == player[0]?.f_password) {
                // console.log("Найдено совпадение ", player[0]?.id, " Пользователь :", player[0]?.lastname)
                //console.log(HOMEPAGE_ROUTE)
                window.open(HOMEPAGE_ROUTE + "/" + player[0].id, "_self");
                setShowFalse(false);
            }
            else {
                setShowFalse(true);
            }
        }
    }, [player])

    const handleSubmit = (event) => {
        let email_user = [];
        const formData = new FormData(event.currentTarget);
        for (let [key, value] of formData.entries()) {
            email_user.push(value);
        }
        setLoginData(email_user);
        event.preventDefault();
    };


    return (
        <section class="auth-backround">
            <form class="auth-form" onSubmit={handleSubmit}>
                <img id="auth-logo" src="/images/logo/logo_red_black.svg" alt="logo with black letters" />
                <label className="auth-input-label">
                    <span>Номер телефона</span>
                    <input
                        className="auth-input"
                        type="text"
                        name="username"
                        placeholder="Введите номер телефона"
                        required
                    />
                </label>
                <label className="auth-input-label">
                    <span>Пароль</span>
                    <input
                        className="auth-input"
                        type="password"
                        name="password"
                        placeholder="Введите пароль"
                        required
                    />
                </label>
                <button className="auth-button" type="submit">
                    <span>Войти</span>
                </button>
                {
                    (showFalse) ? <span class="show-false">Неправильный номер телефона или пароль</span> : <></>
                }
            </form>
        </section>
    );
};