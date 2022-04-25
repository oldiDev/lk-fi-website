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
                        <div id="schedule-label">
                            <span>Расписание</span>
                        </div>
                        <div className="long-green-line" id="schedule-green-line"></div>
                        <table className="schedule">
                            <thead>
                                <tr>
                                    {
                                        shedule.map((e) =>
                                            <th className="schedule-adress">{e.TrainerLocation.end}</th>
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {
                                        shedule.map((e) =>
                                            <td>
                                                {
                                                    (e.MondayStart != null) ?
                                                        <div className="schedule-box">
                                                            <span>Понедельник</span>
                                                            <span className="schedule-value">
                                                                <span className="point"></span>
                                                                {e.MondayStart}
                                                            </span>
                                                        </div>
                                                        : <></>
                                                }
                                                {
                                                    (e.TuesdayStart != null) ?
                                                        <div className="schedule-box">
                                                            <span>Вторник</span>
                                                            <span className="schedule-value">
                                                                <span className="point"></span>
                                                                {e.TuesdayStart}
                                                            </span>
                                                        </div> : <></>
                                                }
                                                {
                                                    (e.WednesdayStart != null) ?
                                                        <div className="schedule-box">
                                                            <span>Среда</span>
                                                            <span className="schedule-value">
                                                                <span className="point"></span>
                                                                {e.WednesdayStart}
                                                            </span>
                                                        </div> : <></>
                                                }
                                                {
                                                    (e.ThursdayStart != null) ?
                                                        <div className="schedule-box">
                                                            <span>Четверг</span>
                                                            <span className="schedule-value">
                                                                <span className="point"></span>
                                                                {e.ThursdayStart}
                                                            </span>
                                                        </div> : <></>
                                                }
                                                {
                                                    (e.FridayStart != null) ?
                                                        <div className="schedule-box">
                                                            <span>Пятница</span>
                                                            <span className="schedule-value">
                                                                <span className="point"></span>
                                                                {e.FridayStart}
                                                            </span>
                                                        </div> : <></>
                                                }
                                                {
                                                    (e.SaturdayStart != null) ?
                                                        <div className="schedule-box">
                                                            <span>Суббота</span>
                                                            <span className="schedule-value">
                                                                <span className="point"></span>
                                                                {e.SaturdayStart}
                                                            </span>
                                                        </div> : <></>
                                                }
                                                {
                                                    (e.SundayStart != null) ?
                                                        <div className="schedule-box">
                                                            <span>Воскресенье</span>
                                                            <span className="schedule-value">
                                                                <span className="point"></span>
                                                                {e.SundayStart}
                                                            </span>
                                                        </div> : <></>
                                                }
                                            </td>
                                        )
                                    }
                                </tr>
                            </tbody>
                        </table>
                        <table className="schedule-mobile">
                            {
                                shedule.map((e) =>
                                    <>
                                        <thead>
                                            <th className="schedule-adress">{e.TrainerLocation.end}</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {
                                                        (e.MondayStart != null) ?
                                                            <div className="schedule-box">
                                                                <span>Понедельник</span>
                                                                <span className="schedule-value">
                                                                    <span className="point"></span>
                                                                    {e.MondayStart}
                                                                </span>
                                                            </div>
                                                            : <></>
                                                    }
                                                    {
                                                        (e.TuesdayStart != null) ?
                                                            <div className="schedule-box">
                                                                <span>Вторник</span>
                                                                <span className="schedule-value">
                                                                    <span className="point"></span>
                                                                    {e.TuesdayStart}
                                                                </span>
                                                            </div> : <></>
                                                    }
                                                    {
                                                        (e.WednesdayStart != null) ?
                                                            <div className="schedule-box">
                                                                <span>Среда</span>
                                                                <span className="schedule-value">
                                                                    <span className="point"></span>
                                                                    {e.WednesdayStart}
                                                                </span>
                                                            </div> : <></>
                                                    }
                                                    {
                                                        (e.ThursdayStart != null) ?
                                                            <div className="schedule-box">
                                                                <span>Четверг</span>
                                                                <span className="schedule-value">
                                                                    <span className="point"></span>
                                                                    {e.ThursdayStart}
                                                                </span>
                                                            </div> : <></>
                                                    }
                                                    {
                                                        (e.FridayStart != null) ?
                                                            <div className="schedule-box">
                                                                <span>Пятница</span>
                                                                <span className="schedule-value">
                                                                    <span className="point"></span>
                                                                    {e.FridayStart}
                                                                </span>
                                                            </div> : <></>
                                                    }
                                                    {
                                                        (e.SaturdayStart != null) ?
                                                            <div className="schedule-box">
                                                                <span>Суббота</span>
                                                                <span className="schedule-value">
                                                                    <span className="point"></span>
                                                                    {e.SaturdayStart}
                                                                </span>
                                                            </div> : <></>
                                                    }
                                                    {
                                                        (e.SundayStart != null) ?
                                                            <div className="schedule-box">
                                                                <span>Воскресенье</span>
                                                                <span className="schedule-value">
                                                                    <span className="point"></span>
                                                                    {e.SundayStart}
                                                                </span>
                                                            </div> : <></>
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    </>

                                )
                            }
                        </table>
                    </div>
                </div>
                <div className="before-footer"></div>
            </body >
            <SiteFooter />
        </html >

    )
}