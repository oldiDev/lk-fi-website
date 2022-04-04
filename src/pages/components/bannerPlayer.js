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
                <div class="container" style={{ display: 'flex' }}>
                    <div class="banner-content-2">
                        <span class="title">{firstname} {lastname}</span>
                        <h5 class="subtitle">Позиция: <span>{position}</span></h5>
                        <h5 class="subtitle">Возраст: <span>{ages} лет</span></h5>
                        <h5 class="subtitle">Нога: <span>{lead_leg}</span></h5>
                        <h5 class="subtitle">Команда: <span>{team}</span></h5>


                        {/*  <a href="#myhistory"  class="custom-button">Моя История</a> */}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1123.14 1576.9" style={{ position: 'relative', right: '-300', marginBottom: '-500' }} >
                        <g data-name="Layer 2">
                            <path
                                d="M523 374c0 89.66-.23 179.32.12 269 .12 30.68-12.69 45.75-39.89 55.33-28.94 10.2-58.89 16.73-88.51 24.42-30.38 7.9-59.52 19-88 32.18-12.59 5.8-24.41 12.89-36.52 19.51-6.18 3.38-12.11 3.2-18.09 0-5.59-3-11-6.22-16.56-9.25-33.16-18.15-68.2-31.53-104.67-41.33-28.75-7.72-57.55-15.32-86.21-23.39-12.9-3.63-25-9.09-34.27-19.48C4 673.78.09 665.35.09 655.78Q-.09 372.39 0 89c0-12.14 6.29-20.53 19.31-24.86C29.56 60.73 40 57.72 50.49 55.2s18.32-8.08 23.32-17.75C80 25.55 91.3 21.26 103.24 17.93a390.61 390.61 0 0174-13.19c13.55-1.09 27.18-1.74 40.69-3.09C240.06-.61 262.16.16 284.28 0c16.47-.12 32.79 2.16 49.16 3.72 18.21 1.73 36.3 4.09 54.32 7.19a282.25 282.25 0 0143.88 11.46c8.56 2.94 14.18 9.17 18.21 16.88 4.63 8.84 12.42 13 21.43 15.81 11.26 3.57 23 5.59 33.94 10.1 10.59 4.35 16.08 11.7 17 23.46 1 12 .72 24 .73 35.92q.15 124.75.05 249.46zM6.12 365.94h.21v193c-.06 28 .49 56-.26 84-.16 5.89-.53 12.06 1.21 17.88a34.32 34.32 0 0014.39 19.8c9.21 6.26 18.38 12 28.94 15.23 25.79 7.87 52 14.14 78.07 21.13 43.13 11.57 84.61 27.17 122.94 50.44a17.12 17.12 0 0018.93-.05c27.93-17.26 58.05-29.75 88.93-40.44 31.18-10.79 63.66-17 95.36-26 13.62-3.86 27.32-7.47 39.33-15.52 3.38-2.27 5.37-6.45 9.06-7.67 5-1.65 7.09-5.32 8.89-9.42a51 51 0 004.57-20.82q0-265.2.14-530.41c0-9.65.18-19.28-.84-28.94-.87-8.19-4.71-13.59-12.11-16.79-8.76-3.79-18-5.83-27.21-8.23-14.74-3.86-28-9.45-34.87-24.71-2.25-5-7.09-8.42-12.45-10.28a193.84 193.84 0 00-34.17-8.78c-18.88-2.93-37.63-6.62-56.68-8.42-14.71-1.4-29.39-3-44.14-4.13a396.78 396.78 0 00-54.4-.36c-22.84 1.47-45.72 2.78-68.51 5.41-20.66 2.38-40.94 6.69-61.31 10.5C94.7 25.14 81.66 32 74.35 47.22 70.73 54.75 63.18 57.8 55.45 60c-10.57 3-21.19 5.77-31.66 9.07-14.2 4.46-17.67 9.51-17.67 24.42z"
                                data-name="Layer 1"
                            />

                        </g>
                    </svg>
                    <img class="banner-thumb-1 d-none d-lg-block" src={avatar} alt="banner" />
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