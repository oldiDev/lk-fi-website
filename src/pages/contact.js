import React from "react";
import { useParams } from "react-router";
import { SiteFooter } from "./components/footer";
import { SiteHeader } from "./components/header";
import { HOMEPAGE_ROUTE } from "./components/utils/consts";


export const Contact =() =>{
    const params = useParams()
    const it_number = params.id;
    return(
        
           <html>
               <SiteHeader />
               <body>
                <div className="contact-background">
                    <section class="hero-section" style={{background:"#212529"}}>
                        {/* <a href="#about" class="banner-icon">
                            <i class="flaticon-down-arrow"></i>
                        </a> */}
                        <div class="container">
                            <div class="hero-content">
                                <h1 class="title" data-bg="Contact" style={{color:"white"}}><span>Тренировки проводятся в 7 районах города Краснодара</span></h1>
                                <ul class="breadcrumb">
                                    <li>
                                        <a href={HOMEPAGE_ROUTE+'/'+it_number}>Домашняя Страница</a>
                                    </li>
                                    <li>
                                        <span>Контакты</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div class="contact-info-section padding-top padding-bottom" id="about">
                        <div class="container">
                            <div class="row mb-30-none justify-content-center">
                                <div class="col-lg-4 col-md-6">
                                    <div class="contact-info-item">
                                        <div class="contact-info-thumb">
                                            <img src="/images/contact/01.png" alt="contact"/>
                                        </div>
                                        <div class="contact-info-content">
                                            <h6 class="title">Адреса</h6>
                                            <ul>
                                                <li>ул. Сормовская 12/6 (Район КСК)</li>
                                            </ul>
                                            <ul>
                                                <li>ул. Восточно-Кругликовская 30\1 (район стадиона Краснодар)</li>
                                            </ul>
                                            <ul>
                                                <li>ул. Академика Трубиллина 49 (Район КубГАу)</li>
                                            </ul>
                                            <ul>

                                                <li>ул. Тепличная 50(Район КП)</li>
                                                
                                                </ul>
                                                <ul>
                                                <li>ул. Морская 47 (ФМР)</li>
                                                </ul>
                                                <ul>
                                                <li>ул. Клары Лучко 1 (ЮМР)</li>
                                                </ul>
                                                <ul>
                                                <li>ул. Зиповская 5 (район Московской)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="contact-info-item">
                                        <div class="contact-info-thumb">
                                            <img src="/images/contact/02.png" alt="contact"/>
                                        </div>
                                        <div class="contact-info-content">
                                            <h6 class="title">Телефон</h6>
                                            <ul>
                                                <li><a href="Tel:999999999994">8(918)645 90 99</a></li>
                                                {/* <li><a href="Tel:999999999994">8(918)645 90 99</a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="contact-info-item">
                                        <div class="contact-info-thumb">
                                            <img src="/images/contact/03.png" alt="contact"/>
                                        </div>
                                        <div class="contact-info-content">
                                            <h6 class="title">Пишиете Нам В Соц. Сетях</h6>
                                            <ul>
                                                <li><a href="Mailto:demo@gmail.com">https://vk.com/krasnodarfs</a></li>
                                                <li><a href="Mailto:demo@gmail.com">https://www.instagram.com/krd_freefootballschool/?hl=ru</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div class="contact-info-section padding-bottom">
                        <div class="container">
                            <div class="contact-wrapper">
                                <div class="hello">
                                    <h2 class="title">Привет</h2>
                                </div>
                                <div class="content">
                                    <div class="para-header">
                                        <h2 class="title">Напишите Нам</h2>
                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their</p>
                                    </div>
                                    <form class="contact-form mb-30-none" id="contact_form_submit">
                                        <div class="contact-form-group">
                                            <input type="text" placeholder="Полное Имя" name="name" id="name"/>
                                        </div>
                                        <div class="contact-form-group">
                                            <input type="text" placeholder="Почта/Номер Телефона" name="email" id="email"/>
                                        </div>
                                        <div class="contact-form-group">
                                            <textarea name="message" id="message" placeholder="Сообщение"></textarea>
                                        </div>
                                        <div class="contact-form-group">
                                            <button type="submit">Подтвердить</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
</div>
               </body>
               <SiteFooter/>
           </html>

    )
}