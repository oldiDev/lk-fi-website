import React, { Fragment } from "react";
import { useHistory, useParams } from "react-router";



export const SiteFooter = () => {
    const params = useParams()
    const history = useHistory()
    const it_number = params.id;

    return (
        <footer>
            <div class="footer-container">
                <img src="/images/logo/logo-footer.svg" alt="footer-logo" class="footer-logo"></img>
                <div class="footer-content">
                    Dempor pede libero dapi useu class venenatis ut bibendum quam ut nibh necm. NonhonPede mollis vel vitae dorpis Sed odio ultrices id, est eu mauris.
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