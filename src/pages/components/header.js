import {
  /* ADMIN_ROUTE, */ AUTH_ROUTE,
    AWARD_ROUTE, BLOG_ROUTE,
    CONTACT_ROUTE,
    HOMEPAGE_ROUTE,
} from "./utils/consts";
import React, { useContext } from "react";
import { Context } from "../..";
import { useHistory, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";
import "./header.css";

export const SiteHeader = () => {
    const { user } = useContext(Context);
    const history = useHistory();
    const params = useParams();
    var it_number = params.id;
    const that_number = params.test;
    if (that_number != undefined) {
        it_number = that_number;
    }
    var lastPay;
    var countLessons;
    var variant_comment;

    const [payDay, setPayDay] = React.useState([]);
    const [loading, setLoading] = React.useState([]);
    React.useEffect(() => {
        const fetchStat = async () => {
            setLoading(true);
            const payDay = await axios.get("https://cdn.lk-ft.ru/footballers");
            setPayDay(payDay.data);
            setLoading(false);
        };
        fetchStat();
    }, []);

    payDay.map((e, i) => {
        if (it_number == e.id) {
            lastPay = e.date_of_last_pay.split('-').reverse().join('.');
            countLessons = e.number_of_lessons;
            variant_comment = e.variant_of_subscription;
        }
    });
    return (
        <div className="header">
            <header class="header-section-2 ">
                <div class="container">
                    <div class="header-wrapper">
                        <div class="follow-area">
                            <ul class="social-icons">
                                <li>
                                    <a href="https://vk.com/krasnodarfs">
                                        <img src="/images/contact/vk.svg" alt="vk-link"></img>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/footskill_krd">
                                        <img src="/images/contact/telegram.svg" alt="telegram-link"></img>
                                    </a>
                                </li>
                                <li>
                                    <span className="vertical-line" />
                                    <span id="last-pay-header">Крайняя оплата:</span>
                                    <span id="last-pay-value">{lastPay}</span>
                                </li>
                                <li>
                                    <span className="vertical-line" />
                                    <span id="count-lessons-header">Оплачено на:</span>
                                    <span id="count-lessons-value">{countLessons}</span>
                                </li>
                                <li>
                                    <span className="vertical-line" />
                                    <span id="variant-comment-header">Абонемент:</span>
                                    <span id="variant-comment-value">{variant_comment}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="icons_header_right_phone_email">
                            <div class="header-right">
                                <a href="tel:8-918-645-90-99" class="custom-button">
                                    <Icon className="icon-phone-email" icon="bx:bx-phone" />
                                    <span class="header-link">8(918)645-90-99</span>
                                </a>
                            </div>

                            <div class="header-right">
                                <a href="https://krasnodar-fs.ru/" class="custom-button">
                                    <Icon className="icon-phone-email" icon="bx:bx-envelope-open" />
                                    <span class="header-link">https://krasnodar-fs.ru/</span>
                                </a>
                            </div>
                        </div>
                        <input id="menu-toggle" type="checkbox" />
                        <label class='menu-button-container' for="menu-toggle">
                            <div class='menu-button'></div>
                        </label>
                        <ul class="menu-resized">
                            <li id="menu-resized-first">
                                <a href={HOMEPAGE_ROUTE + "/" + it_number}>
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a href={BLOG_ROUTE + "/" + it_number} >
                                    Информация
                                </a>
                            </li>
                            <li>
                                <a href={CONTACT_ROUTE + "/" + it_number}>
                                    Расписание
                                </a>
                            </li>
                            <li>
                                <a href={AWARD_ROUTE + '/' + it_number}>
                                    Достижения
                                </a>
                            </li>
                            <li>
                                <a href={AUTH_ROUTE}>Выход</a>
                            </li>
                            <li>
                                <span>Крайняя оплата:</span>
                                <span>{lastPay}</span>
                            </li>
                            <li>
                                <span>Оплачено на: </span>
                                <span>{countLessons}</span>
                            </li>
                            <li>
                                <span>Абонемент: </span>
                                <span>{variant_comment}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <section class="sticky-test">
                <div class="header-bottom">
                    <div
                        class="container "
                        style={{
                            borderTop: "solid 1px",
                            marginTop: '-40px',
                            background: "#fff",
                        }}
                    >
                        <div class="header-bottom-wrapper">
                            <div class="logo">
                                <a href={HOMEPAGE_ROUTE + "/" + it_number}>
                                    <img
                                        src="/images/logo/logo_green.svg"
                                        alt="logo"
                                        style={{ width: "78px", height: "55px" }}
                                    />
                                </a>
                            </div>
                            <ul class="header-menu">
                                <li>
                                    <a href={HOMEPAGE_ROUTE + "/" + it_number} id="main-page-button" >
                                        Главная
                                    </a>
                                </li>
                                <li>
                                    <a href={BLOG_ROUTE + "/" + it_number} id="information-button">
                                        Информация
                                    </a>
                                </li>
                                <li>
                                    <a href={CONTACT_ROUTE + "/" + it_number} id="schedule-button">
                                        Расписание
                                    </a>
                                </li>
                                <li>
                                    <a href={AWARD_ROUTE + '/' + it_number} id='award-button'>
                                        Достижения
                                    </a>
                                </li>
                                {/* <li class="enter-header-button">
                                    <a href={AUTH_ROUTE}>Выход</a>
                                </li> */}
                                {/*                                             <li>
                                                    <a href="#0" >Регистрация</a>
                                                </li> */}
                            </ul>
                            <div class="enter-header-button">
                                <a href={AUTH_ROUTE}>Выход</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
