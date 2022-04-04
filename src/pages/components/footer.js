import React, { Fragment } from "react";
import { useHistory, useParams } from "react-router";



export const SiteFooter = () => {
    const params = useParams()
    const history = useHistory()
    const it_number = params.id;

    return (
        <div >
            <footer class="bg_img footer-overlay" data-background="./images/footer-bg.jpg">
                <a href="#" onClick="scroll(0,0); return false" class="banner-icon">
                    <i class="flaticon-up-arrow-angle"></i>
                </a>
                <div class="footer-shape-bg bg_img" data-background="./images/footer-shape.png"></div>
                <div class="container">
                    <div class="footer-area">
                        <div class="footer-widget widget-about">
                            <div class="logo">
                                <img src="/images/logo/logo.png" alt="logo" />
                            </div>
                        </div>
                        {/*  <div class="footer-widget widget-link">
                            <h5 class="title">Полезные ссылки</h5>
                            <ul>
                                <li>
                                    <a href="#0">О нас</a>
                                </li>
                                <li>
                                    <a href="#0">История</a>
                                </li>
                                <li>
                                    <a href="#0">Часто задаваемые вопросы</a>
                                </li>
                                <li>
                                    <a href="#0">Навыки и умения</a>
                                </li>
                                <li>
                                    <a href="#0">Награда</a>
                                </li>
                            </ul>
                        </div> */}
                        {/* <div class="footer-widget widget-link">
                            <h5 class="title">Мои награды</h5>
                            <ul>
                                <li>
                                    <a href="#0">FIFA The Best</a>
                                </li>
                                <li>
                                    <a href="#0">MOTM</a>
                                </li>
                                <li>
                                    <a href="#0">Uefa The Best</a>
                                </li>
                                <li>
                                    <a href="#0">POTY</a>
                                </li>
                            </ul>
                        </div> */}
                        <div class="footer-widget widget-follow">
                            <h5 class="title">Подписывайтесь на Нас</h5>
                            <ul class="social-icons choto">
                                <li>
                                    <a href="https://vk.com/krasnodarfs">
                                        <i class="fab fa-vk  fa-1x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/footskill_krd" >
                                        <i class="fab fa-telegram "></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="copyright">
                        <p class="m-0" >
                            &copy; Все права защищены <a href="#0">FOOTSKILL</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}