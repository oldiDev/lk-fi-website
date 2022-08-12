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
    // console.log(shedule[2]);
    return (

        <html>
            <SiteHeader />
            <body style={{minHeight: "calc(100vh - 100px)"}}>
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
                                            <th className="schedule-adress">{e.Loation}</th>
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
                                                    (e.MondayStart != null && e.MondayStart != '') ?
                                                        <div className="schedule-box">
                                                            <span>Понедельник</span>
                                                            <span className="schedule-value">
                                                                <div className="schedule-time">
                                                                    {
                                                                        (e.MondayStart.split(' и ')).map((f) =>
                                                                            <div className="schedule-time-array">
                                                                                <span className="point"></span>
                                                                                <span>{f}</span>
                                                                            </div>

                                                                        )
                                                                    }
                                                                </div>
                                                                <div className="schedule-themes">({e.MondayArtema})</div>
                                                            </span>
                                                        </div>
                                                        : <></>
                                                }
                                                {
                                                    (e.MondayStart != null && e.MondayStart != '') ?
                                                        <div className="green-line"></div> : <></>
                                                }
                                                {
                                                    (e.TuesdayStart != null && e.TuesdayStart != '') ?
                                                        <div className="schedule-box">
                                                            <span>Вторник</span>
                                                            <span className="schedule-value">
                                                                <div className="schedule-time">
                                                                    {
                                                                        (e.TuesdayStart.split(' и ')).map((f) =>
                                                                            <div className="schedule-time-array">
                                                                                <span className="point"></span>
                                                                                <span>{f}</span>
                                                                            </div>

                                                                        )
                                                                    }
                                                                </div>
                                                                <div className="schedule-themes">({e.TuesdayArtema})</div>
                                                            </span>
                                                        </div> : <></>
                                                }
                                                {
                                                    (e.TuesdayStart != null && e.TuesdayStart != '') ?
                                                        <div className="green-line"></div> : <></>
                                                }
                                                {
                                                    (e.WednesdayStart != null && e.WednesdayStart != '') ?

                                                        <div className="schedule-box">
                                                            <span>Среда</span>
                                                            <span className="schedule-value">
                                                                <div className="schedule-time">
                                                                    {
                                                                        (e.WednesdayStart.split(' и ')).map((f) =>
                                                                            <div>
                                                                                <span className="point"></span>
                                                                                <span>{f}</span>
                                                                            </div>

                                                                        )
                                                                    }

                                                                </div>
                                                                <div className="schedule-themes">({e.WednesdayArtema})</div>
                                                            </span>
                                                        </div> : <></>
                                                }
                                                {
                                                    (e.WednesdayStart != null && e.WednesdayStart != '') ?
                                                        <div className="green-line"></div> : <></>
                                                }
                                                {
                                                    (e.ThursdayStart != null && e.ThursdayStart != '') ?
                                                        <div className="schedule-box">
                                                            <span>Четверг</span>
                                                            <span className="schedule-value">
                                                                <div className="schedule-time">
                                                                    {
                                                                        (e.ThursdayStart.split(' и ')).map((f) =>
                                                                            <div className="schedule-time-array">
                                                                                <span className="point"></span>
                                                                                <span>{f}</span>
                                                                            </div>

                                                                        )
                                                                    }
                                                                </div>
                                                                <div className="schedule-themes">({e.ThursdayArtema})</div>
                                                            </span>
                                                        </div> : <></>
                                                }
                                                {
                                                    (e.ThursdayStart != null && e.ThursdayStart != '') ?
                                                        <div className="green-line"></div> : <></>
                                                }
                                                {
                                                    (e.FridayStart != null && e.FridayStart != '') ?
                                                        <div className="schedule-box">
                                                            <span>Пятница</span>
                                                            <span className="schedule-value">
                                                                <div className="schedule-time">
                                                                    {
                                                                        (e.FridayStart.split(' и ')).map((f) =>
                                                                            <div className="schedule-time-array">
                                                                                <span className="point"></span>
                                                                                <span>{f}</span>
                                                                            </div>

                                                                        )
                                                                    }
                                                                </div>
                                                                <div className="schedule-themes">({e.FridayArtema})</div>
                                                            </span>
                                                        </div> : <></>
                                                }
                                                {
                                                    (e.FridayStart != null && e.FridayStart != '') ?
                                                        <div className="green-line"></div> : <></>
                                                }
                                                {
                                                    (e.SaturdayStart != null && e.SaturdayStart != '') ?
                                                        <div className="schedule-box">
                                                            <span>Суббота</span>
                                                            <span className="schedule-value">
                                                                <div className="schedule-time">
                                                                    {
                                                                        (e.SaturdayStart.split(' и ')).map((f) =>
                                                                            <div className="schedule-time-array">
                                                                                <span className="point"></span>
                                                                                <span>{f}</span>
                                                                            </div>

                                                                        )
                                                                    }
                                                                </div>
                                                                <div className="schedule-themes">({e.SaturdayArtema})</div>
                                                            </span>
                                                        </div> : <></>
                                                }
                                                {
                                                    (e.SaturdayStart != null && e.SaturdayStart != '') ?
                                                        <div className="green-line"></div> : <></>
                                                }
                                                {
                                                    (e.SundayStart != null && e.SundayStart != '') ?
                                                        <div className="schedule-box">
                                                            <span>Воскресенье</span>
                                                            <span className="schedule-value">
                                                                <div className="schedule-time">
                                                                    {
                                                                        (e.SundayStart.split(' и ')).map((f) =>
                                                                            <div className="schedule-time-array">
                                                                                <span className="point"></span>
                                                                                <span>{f}</span>
                                                                            </div>

                                                                        )
                                                                    }
                                                                </div>
                                                                <div className="schedule-themes">({e.SundayArtema})</div>
                                                            </span>
                                                        </div> : <></>
                                                }
                                                {
                                                    (e.SundayStart != null && e.SundayStart != '') ?
                                                        <div className="green-line"></div> : <></>
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
                                            <th className="schedule-adress">{e.Loation}</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {
                                                        (e.MondayStart != null && e.MondayStart != '') ?
                                                            <div className="schedule-box">
                                                                <span>Понедельник</span>
                                                                <span className="schedule-value">
                                                                    <div className="schedule-time">
                                                                        {
                                                                            (e.MondayStart.split(' и ')).map((f) =>
                                                                                <div className="schedule-time-array">
                                                                                    <span className="point"></span>
                                                                                    <span>{f}</span>
                                                                                </div>

                                                                            )
                                                                        }
                                                                    </div>
                                                                    <div className="schedule-themes">({e.MondayArtema})</div>
                                                                </span>
                                                            </div>
                                                            : <></>
                                                    }
                                                    {
                                                        (e.TuesdayStart != null && e.TuesdayStart != '') ?
                                                            <div className="schedule-box">
                                                                <span>Вторник</span>
                                                                <span className="schedule-value">
                                                                    <div className="schedule-time">
                                                                        {
                                                                            (e.TuesdayStart.split(' и ')).map((f) =>
                                                                                <div className="schedule-time-array">
                                                                                    <span className="point"></span>
                                                                                    <span>{f}</span>
                                                                                </div>

                                                                            )
                                                                        }
                                                                    </div>
                                                                    <div className="schedule-themes">({e.TuesdayArtema})</div>
                                                                </span>
                                                            </div> : <></>
                                                    }
                                                    {
                                                        (e.WednesdayStart != null && e.WednesdayStart != '') ?
                                                            <div className="schedule-box">
                                                                <span>Среда</span>
                                                                <span className="schedule-value">
                                                                    <div className="schedule-time">
                                                                        {
                                                                            (e.WednesdayStart.split(' и ')).map((f) =>
                                                                                <div>
                                                                                    <span className="point"></span>
                                                                                    <span>{f}</span>
                                                                                </div>

                                                                            )
                                                                        }
                                                                    </div>
                                                                    <div className="schedule-themes">({e.WednesdayArtema})</div>
                                                                </span>
                                                            </div> : <></>
                                                    }
                                                    {
                                                        (e.ThursdayStart != null && e.ThursdayStart != '') ?
                                                            <div className="schedule-box">
                                                                <span>Четверг</span>
                                                                <span className="schedule-value">
                                                                    <div className="schedule-time">
                                                                        {
                                                                            (e.ThursdayStart.split(' и ')).map((f) =>
                                                                                <div className="schedule-time-array">
                                                                                    <span className="point"></span>
                                                                                    <span>{f}</span>
                                                                                </div>

                                                                            )
                                                                        }
                                                                    </div>
                                                                    <div className="schedule-themes">({e.ThursdayArtema})</div>
                                                                </span>
                                                            </div> : <></>
                                                    }
                                                    {
                                                        (e.FridayStart != null && e.FridayStart != '') ?
                                                            <div className="schedule-box">
                                                                <span>Пятница</span>
                                                                <span className="schedule-value">
                                                                    <div className="schedule-time">
                                                                        {
                                                                            (e.FridayStart.split(' и ')).map((f) =>
                                                                                <div className="schedule-time-array">
                                                                                    <span className="point"></span>
                                                                                    <span>{f}</span>
                                                                                </div>

                                                                            )
                                                                        }
                                                                    </div>
                                                                    <div className="schedule-themes">({e.FridayArtema})</div>
                                                                </span>
                                                            </div> : <></>
                                                    }
                                                    {
                                                        (e.SaturdayStart != null && e.SaturdayStart != '') ?
                                                            <div className="schedule-box">
                                                                <span>Суббота</span>
                                                                <span className="schedule-value">
                                                                    <div className="schedule-time">
                                                                        {
                                                                            (e.SaturdayStart.split(' и ')).map((f) =>
                                                                                <div className="schedule-time-array">
                                                                                    <span className="point"></span>
                                                                                    <span>{f}</span>
                                                                                </div>

                                                                            )
                                                                        }
                                                                    </div>
                                                                    <div className="schedule-themes">({e.SaturdayArtema})</div>
                                                                </span>
                                                            </div> : <></>
                                                    }
                                                    {
                                                        (e.SundayStart != null && e.SundayStart != '') ?
                                                            <div className="schedule-box">
                                                                <span>Воскресенье</span>
                                                                <span className="schedule-value">
                                                                    <div className="schedule-time">
                                                                        {
                                                                            (e.SundayStart.split(' и ')).map((f) =>
                                                                                <div className="schedule-time-array">
                                                                                    <span className="point"></span>
                                                                                    <span>{f}</span>
                                                                                </div>

                                                                            )
                                                                        }
                                                                    </div>
                                                                    <div className="schedule-themes">({e.SundayArtema})</div>
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
            </body >
            <SiteFooter />
        </html >

    )
}