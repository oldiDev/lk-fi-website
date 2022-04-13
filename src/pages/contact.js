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

    console.log(shedule)
    return (

        <html>
            <SiteHeader />
            <body>
                <div class="container" id="container-shedule">
                    <div class="history-wrapper">
                        {shedule.reverse().map((e, i) =>
                            <>
                                <div className='schedule-day-title'>
                                    <span>{e.name}</span>
                                </div>
                                <div class="schedule">
                                    <ul>
                                        <li>
                                            <span>Понедельник</span>
                                            <span class="shedule-value">
                                                <span class="point"></span>
                                                {e.MondayStart} {e.TrainerLocation.end}
                                            </span>
                                        </li>
                                        <li>
                                            <span>Вторник</span>
                                            <span class="shedule-value">
                                                <span class="point"></span>
                                                {e.TuesdayStart} {e.TrainerLocation.end}
                                            </span>
                                        </li>
                                        <li>
                                            <span>Среда</span>
                                            <span class="shedule-value">
                                                <span class="point"></span>
                                                {e.WednesdayStart} {e.TrainerLocation.end}
                                            </span>
                                        </li>
                                        <li>
                                            <span>Четверг</span>
                                            <span class="shedule-value">
                                                <span class="point"></span>
                                                {e.ThursdayStart} {e.TrainerLocation.end}
                                            </span>
                                        </li>
                                    </ul>
                                    <ul id="schedule-second">
                                        <li>
                                            <span>Пятница</span>
                                            <span class="shedule-value">
                                                <span class="point"></span>
                                                {e.FridayStart} {e.TrainerLocation.end}
                                            </span>
                                        </li>
                                        <li>
                                            <span>Суббота</span>
                                            <span class="shedule-value">
                                                <span class="point"></span>
                                                {e.SaturdayStart} {e.TrainerLocation.end}
                                            </span>
                                        </li>
                                        <li>
                                            <span>Воскресенье</span>
                                            <span class="shedule-value">
                                                <span class="point"></span>
                                                {e.SundayStart} {e.TrainerLocation.end}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="long-green-line"></div>
                            </>
                        )}
                    </div>
                </div>

            </body >
            <SiteFooter />
        </html >

    )
}