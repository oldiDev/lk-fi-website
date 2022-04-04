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
                </div>
            </section>
        </Fragment>
    )
}