import axios from "axios";
import React, { useState } from "react"
import { useParams } from "react-router";
/* 
import {observer} from "mobx-react-lite";
 */


export const SelectionShedule = () => {
    const [show, setShow] = useState(false);
    const params = useParams();
    const it_number = params.id;

    const [shedule, setShedule] = React.useState([]);
    const [loading, setLoading] = React.useState([])
    React.useEffect(() => {
        const fetchStat = async () => {
            setLoading(true);
            const res = await axios.get('https://cdn.lk-ft.ru/scheduleas');
            setShedule(res.data)
            setLoading(false);
        }

        fetchStat();
    }, []);


    if (show) {
        return (
            <div class="container">
                <section class="section-header-2">
                    <div class="text-theme-show" onClick={() => setShow(false)}>
                        <span>Расписание занятий</span>
                        <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                    </div>
                    <div class="history-wrapper">
                        {shedule.reverse().map((e, i) => <>
                            <div className='schedule-day-title'>
                                <span>{e.name}</span>
                            </div>
                            <div class="schedule">
                                <ul>
                                    <li>
                                        <span>Понедельник</span>
                                        <span class="shedule-value">
                                            <span class="point"></span>
                                            {e.MondayStart} {e.TrainerLocation[0].end}
                                        </span>
                                    </li>
                                    <li>
                                        <span>Вторник</span>
                                        <span class="shedule-value">
                                            <span class="point"></span>
                                            {e.TuesdayStart}
                                        </span>
                                    </li>
                                    <li>
                                        <span>Среда</span>
                                        <span class="shedule-value">
                                            <span class="point"></span>
                                            {e.WednesdayStart}
                                        </span>
                                    </li>
                                    <li>
                                        <span>Четверг</span>
                                        <span class="shedule-value">
                                            <span class="point"></span>
                                            {e.ThursdayStart}
                                        </span>
                                    </li>
                                </ul>
                                <ul id="schedule-second">
                                    <li>
                                        <span>Пятница</span>
                                        <span class="shedule-value">
                                            <span class="point"></span>
                                            {e.FridayStart}
                                        </span>
                                    </li>
                                    <li>
                                        <span>Суббота</span>
                                        <span class="shedule-value">
                                            <span class="point"></span>
                                            {e.SaturdayStart}
                                        </span>
                                    </li>
                                    <li>
                                        <span>Воскресенье</span>
                                        <span class="shedule-value">
                                            <span class="point"></span>
                                            {e.SundayStart}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="long-green-line"></div>
                        </>)}
                    </div>
                </section>
            </div>
        )
    } else {

        return (
            <div class="container">
                <div class="section-header-2" >
                    <div class="text-theme" onClick={() => setShow(true)}>
                        <span>Расписание занятий</span>
                        <img src="/images/client/right-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                    </div>
                </div>
            </div>
        )
    }

}

