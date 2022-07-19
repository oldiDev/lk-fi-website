import React from "react";
import { useParams } from "react-router";
import { AWARD_ROUTE, BLOG_ROUTE, CONTACT_ROUTE, HOMEPAGE_ROUTE } from "./utils/consts";



export const SiteFooter = () => {
    const params = useParams()
    const it_number = params.id;

    return (
        <footer>
            <div class="footer-container">
                <img src="/images/logo/logo_red_white.svg" alt="footer-logo" class="footer-logo"></img>
                <div class="footer-content">
                    <ul>
                        <li>
                            <a href={HOMEPAGE_ROUTE + "/" + it_number}>
                                Главная
                            </a>
                        </li>
                        <li>
                            <a href={BLOG_ROUTE + "/" + it_number}>
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
                    </ul>
                </div>

                <div class="footer-social">
                    <div class="social-text">Подписывайтесь на нас</div>
                    <div class="footer-social-icons">
                        <a href="https://vk.com/krasnodarfs">
                            <img src="/images/contact/vk-white.svg" alt="vk-link"></img>
                        </a>
                        <a href="https://t.me/footskill_krd">
                            <img src="/images/contact/telegram-white.svg" alt="telegram-link"></img>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}