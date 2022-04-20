import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { SiteFooter } from "./components/footer";
import { SiteHeader } from "./components/header";


export const Contact = () => {
    const params = useParams()
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

    return (

        <html>
            <SiteHeader />
            <body>
                <div class="container" id="container-shedule">
                    <div class="history-wrapper">
                        {shedule.map((e, i) =>
                            <>
                                <div className='schedule-day-title'>
                                    <span>{e.TrainerLocation.end}</span>
                                </div>

                                <div class="schedule">
                                    <ul>
                                        {(e.MondayStart != null) ?
                                            <li>
                                                <span>Понедельник</span>
                                                <span class="schedule-value">
                                                    <span class="point"></span>
                                                    {e.MondayStart}
                                                </span>
                                            </li> : <></>
                                        }
                                        {
                                            (e.TusdayStart != null) ?
                                                <li>
                                                    <span>Вторник</span>
                                                    <span class="schedule-value">
                                                        <span class="point"></span>
                                                        {e.TuesdayStart}
                                                    </span>
                                                </li> : <></>
                                        }
                                        {
                                            (e.WednesdayStart != null) ?
                                                <li>
                                                    <span>Среда</span>
                                                    <span class="schedule-value">
                                                        <span class="point"></span>
                                                        {e.WednesdayStart}
                                                    </span>
                                                </li> : <></>
                                        }
                                        {
                                            (e.ThursdayStart != null) ?
                                                <li>
                                                    <span>Четверг</span>
                                                    <span class="schedule-value">
                                                        <span class="point"></span>
                                                        {e.ThursdayStart}
                                                    </span>
                                                </li> : <></>
                                        }
                                        {
                                            (e.FridayStart != null) ?
                                                <li>
                                                    <span>Пятница</span>
                                                    <span class="schedule-value">
                                                        <span class="point"></span>
                                                        {e.FridayStart}
                                                    </span>
                                                </li> : <></>
                                        }
                                        {
                                            (e.SaturdayStart != null) ?
                                                <li>
                                                    <span>Суббота</span>
                                                    <span class="schedule-value">
                                                        <span class="point"></span>
                                                        {e.SaturdayStart}
                                                    </span>
                                                </li> : <></>
                                        }
                                        {
                                            (e.SundayStart != null) ?
                                                <li>
                                                    <span>Воскресенье</span>
                                                    <span class="schedule-value">
                                                        <span class="point"></span>
                                                        {e.SundayStart}
                                                    </span>
                                                </li> : <></>
                                        }

                                    </ul>
                                </div>
                                <div className="long-green-line" id="schedule-green-line"></div>
                            </>
                        )}
                    </div>
                </div>

            </body >
            <SiteFooter />
        </html >

    )
}