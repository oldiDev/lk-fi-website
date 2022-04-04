import React, { Fragment } from "react"
/* 
import {observer} from "mobx-react-lite";
 */


export const BannerPlayer = ({ firstname, lastname, position, avatar, birthday, lead_leg, team }) => {

    if (lead_leg == null) {
        lead_leg = "Не указано"
    }
    if (team == null) {
        team = "Не указано"
    }

    //Возраст
    var today = new Date();
    var birthDate = new Date(birthday);
    var ages = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        ages--;
    }

    console.log(ages)

    return (
        <Fragment>
            <section class="banner-section-2">
                <div class="container" style={{ display: "flex" }}>
                    <div class="banner-content-2">
                        <span class="title">{firstname} {lastname}</span>
                        <h5 class="subtitle">Позиция: <span>{position}</span></h5>
                        <h5 class="subtitle">Возраст: <span>{ages} лет</span></h5>
                        <h5 class="subtitle">Нога: <span>{lead_leg}</span></h5>
                        <h5 class="subtitle">Команда: <span>{team}</span></h5>


                        {/*  <a href="#myhistory"  class="custom-button">Моя История</a> */}
                    </div>
                    <img className="avatar" src="/images/banner/banner.png" alt="banner" />
                    {/* <div class="banner-counter-wrapper">
                        <div class="banner-counter-item">
                            <div class="thumb">
                                <img src="http://localhost:3000//images/banner/01.png" alt="banner"/>
                            </div>
                            <div class="content">
                                <h6 class="title">Все Матчи</h6>
                                <div class="counter odometer" data-odometer-final="896">0</div>
                            </div>
                        </div>
                        <div class="banner-counter-item">
                            <div class="thumb">
                                <img src="http://localhost:3000//images/banner/02.png" alt="banner"/>
                            </div>
                            <div class="content">
                                <h6 class="title">Все Голы</h6>
                                <div class="counter odometer" data-odometer-final="209">0</div>
                            </div>
                        </div>
                        <div class="banner-counter-item">
                            <div class="thumb">
                                <img src="http://localhost:3000//images/banner/03.png" alt="banner"/>
                            </div>
                            <div class="content">
                                <h6 class="title">Игрок Года</h6>
                                <div class="counter odometer" data-odometer-final="03">0</div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div class="right-text">
                        И
                    </div> */}
                </div>
                {/* <a href="#history" class="banner-icon">
                    <i class="flaticon-down-arrow"></i>
                </a> */}
                {/* <div >
                    
                    <img class="banner-thumb-1 d-none d-lg-block" src={avatar} alt="banner"/>
                </div> */}
                {/*  <div class="banner-thumb-2 d-none d-lg-block">
                    <img src="/images/banner/head.png" alt="banner"/>
                </div>
                <div class="banner-thumb-3 d-none d-lg-block">
                    <img src="/images/banner/ball.png" alt="banner"/>
                </div> */}
            </section>
        </Fragment>
    )
}