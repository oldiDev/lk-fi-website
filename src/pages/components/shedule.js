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
                            <div className='shedule-day-title'>
                                <span>{e.name}</span>
                            </div>
                            <div class="shedule">
                                <ul>
                                    <li>
                                        <span>Понедельник</span>
                                        <span>
                                            {e.MondayStart}
                                        </span>
                                    </li>
                                    <li>
                                        <span>Вторник</span>
                                        <span>
                                            {e.TuesdayStart}
                                        </span>
                                    </li>
                                    <li>
                                        <span>Среда</span>
                                        <span>
                                            {e.WednesdayStart}
                                        </span>
                                    </li>
                                    <li>
                                        <span>Четверг</span>
                                        <span>
                                            {e.ThursdayStart}
                                        </span>
                                    </li>
                                </ul>
                                <ul id="shedule-second">
                                    <li>
                                        <span>Пятница</span>
                                        <span>
                                            {e.FridayStart}
                                        </span>
                                    </li>
                                    <li>
                                        <span>Суббота</span>
                                        <span>{e.SaturdayStart}</span>
                                    </li>
                                    <li>
                                        <span>Воскресенье</span>
                                        <span>{e.SundayStart}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="long-green-line"></div>
                        </>)}
                    </div>
                </section>
            </div>
            // <section class="history-section" id="history">
            //     <div class="container">
            //         <h2 class="title" onClick={() => setShow(false)} style={{ cursor: 'pointer', padding: '0!important' }}>
            //             <span class="text-theme">Расписание Занятий</span>
            //         </h2>
            //         <div class="history-wrapper">
            //             {shedule.map((e, i) => <>
            //                 <div class="history-item-2">
            //                     <div class="history-content">
            //                         <h3 class="title">{e.name}</h3>
            //                         <ul class="common-list">
            //                             <li>
            //                                 Понедельник: {e.MondayStart}
            //                             </li>
            //                             <li>
            //                                 Вторник: {e.ThursdayStart}
            //                             </li>
            //                             <li>
            //                                 Среда: {e.WednesdayStart}
            //                             </li>
            //                             <li>
            //                                 Четверг: {e.ThursdayStart}
            //                             </li>
            //                             <li>
            //                                 Пятница: {e.FridayStart}
            //                             </li>
            //                             <li>
            //                                 Суббота: {e.SaturdayStart}
            //                             </li>
            //                             <li>
            //                                 Воскресенье: {e.SundayStart}
            //                             </li>
            //                         </ul>
            //                     </div>
            //                 </div>
            //             </>)}
            //         </div>
            //     </div>
            // </section>
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

