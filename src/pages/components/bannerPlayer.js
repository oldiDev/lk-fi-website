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

    return (
        <Fragment>
            <section class="banner-section-2">
                <div class="container-banner">
                    <div class="banner-content-2">
                        <span class="title">{firstname} {lastname}</span>
                        <h5 class="subtitle">Позиция: <span>{position}</span></h5>
                        <h5 class="subtitle">Дата рождения: <span>{birthday}</span></h5>
                        <h5 class="subtitle">Нога: <span>{lead_leg}</span></h5>
                        <h5 class="subtitle">Команда: <span>{team}</span></h5>
                    </div>
                    <div className="avatar-circle">
                        <img className="avatar" src={avatar} alt="banner" />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}