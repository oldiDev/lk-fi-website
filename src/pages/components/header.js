import {
  /* ADMIN_ROUTE, */ AUTH_ROUTE,
  /* AWARD_ROUTE, */ BLOG_ROUTE,
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
            lastPay = e.date_of_last_pay;
            countLessons = e.number_of_lessons;
            variant_comment = e.variant_of_subscription;
        }
    });
    /* console.log(lastPay , " " , variant_comment); */

    /* console.log("from header",it_number); */
    return (
        <div className="header">
            <div class="overlay"></div>
            <a href="#0" class="scrollToTop">
                <i class="fas fa-angle-up"></i>
            </a>
            <header class="header-section-2 ">
                <div class="container">
                    <div class="header-wrapper">
                        <div class="follow-area ml-0">
                            <ul class="social-icons justify-content-start">
                                <li>
                                    <a href="https://vk.com/krasnodarfs">
                                        <i class="fab fa-vk"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/footskill_krd">
                                        <i class="fab fa-telegram"></i>
                                    </a>
                                </li>
                                {/* </ul>
                            <ul className="ul-header"> */}
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
                                <Icon className="icon-phone-email" icon="bx:bx-phone" />
                                <a href="#0" class="custom-button">
                                    8(918)645 90 99
                                </a>
                            </div>

                            <div class="header-right">
                                <Icon className="icon-phone-email" icon="bx:bx-envelope-open" />
                                <a href="#0" class="custom-button">
                                    https://krasnodar-fs.ru/
                                </a>
                            </div>
                        </div>
                        {/*                             <div class="header-right d-none d-lg-block">
                                <a href="#0" class="custom-button choto ml-2" 
                                onClick={() => history.push(AUTH_ROUTE)}
                                >Выход</a>
                            </div> */}
                        {/* <div class="ellipsis-bar ml-auto d-lg-none">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                        <div class="header-bar">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div> */}
                    </div>
                </div>

                {/* <input type="checkbox" name="thing" value="valuable" id="slide-box" /> */}
                <ul class="sub-nav">
                    <li>
                        <a
                            href={HOMEPAGE_ROUTE + "/" + it_number}
                            class="custom-button choto py-0 d-lg-none"
                        >
                            Домашняя страница
                        </a>
                    </li>
                    <li>
                        <a
                            href={BLOG_ROUTE + "/" + it_number}
                            class="custom-button choto py-0 d-lg-none"
                        >
                            Новости
                        </a>
                    </li>

                    {/* <li>
                                            <a href="" class="custom-button choto py-0 d-lg-none">Награды</a>
                                        </li> */}
                    <li>
                        <a
                            href={CONTACT_ROUTE + "/" + it_number}
                            class="custom-button choto py-0 d-lg-none"
                        >
                            Контакты
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://vk.com/krasnodarfs"
                            class="custom-button choto py-0 d-lg-none"
                        >
                            Подписывайся
                        </a>
                    </li>
                    <li>
                        <a href={AUTH_ROUTE} class="custom-button choto py-0 d-lg-none">
                            Выйти
                        </a>
                    </li>
                </ul>

                <div class="header-troops">
                    <div class="close-btn">
                        <i class="fas fa-times"></i>
                    </div>
                    <h6 class="title">Подписывайся</h6>
                    <ul class="social-icons justify-content-start choto">
                        <li>
                            <a href="https://vk.com/krasnodarfs">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/footskill_krd">
                                <i class="fab fa-telegram"></i>
                            </a>
                        </li>
                    </ul>
                    {/* <form class="header-search-form">
                            <input type="text" placeholder="Search Keyword"/>
                            <button type="submit">
                                <i class="flaticon-search-interface-symbol"></i>
                            </button>
                        </form> */}
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
                                <a href="index.html">
                                    <img
                                        src="/images/logo/logo_green.svg"
                                        alt="logo"
                                        style={{ width: "78px", height: "55px" }}
                                    />
                                </a>
                            </div>
                            <ul class="menu" id="header-menu">
                                <li>
                                    <a
                                        href={HOMEPAGE_ROUTE + "/" + it_number}
                                        id="main-page-button"
                                    >
                                        Главная
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={BLOG_ROUTE + "/" + it_number}
                                        id="information-button"
                                    >
                                        Информация
                                    </a>
                                </li>
                                {/*                                         <li>
                                                <a href={AWARD_ROUTE}>Награды</a>
                                            </li> */}
                                <li>
                                    <a
                                        href={CONTACT_ROUTE + "/" + it_number}
                                        id="schedule-button"
                                    >
                                        Расписание
                                    </a>
                                </li>
                                <div className="enter-header-button">
                                    <li>
                                        <a href={AUTH_ROUTE}>Выход</a>
                                    </li>
                                    {/*                                             <li>
                                                    <a href="#0" >Регистрация</a>
                                                </li> */}
                                </div>
                            </ul>
                            {/* <form class="header-search-form d-none d-lg-flex">
                                        <input type="text" placeholder="Search Keyword"/>
                                        <button type="submit">
                                            <i class="flaticon-search-interface-symbol"></i>
                                        </button>
                                    </form> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
