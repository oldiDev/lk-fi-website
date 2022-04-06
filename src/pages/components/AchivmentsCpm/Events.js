import React, { useState } from "react";

export const Events = ({ dva, tre, penal }) => {

    console.log(dva, tre, penal)

    const [show, setShow] = useState(false);

    if (!show) {
        return (
            <section>
                <div class="achivements-container" onClick={() => setShow(true)}>
                    <siv class="achivements-title" style={{ cursor: 'pointer' }}>
                        <span>Мероприятия</span>
                        <img src="/images/client/right-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                    </siv>
                </div>
            </section>
        )
    } else {
        return (
            <section>
                <div>
                    <div class="achivements-container" onClick={() => setShow(false)}>
                        <div class="achivements-title-show" style={{ cursor: 'pointer' }}>
                            <span>Мероприятия</span>
                            <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                        </div>
                    </div>
                    <div class='inside-container'>
                        <ul>
                            <li>
                                <p>Соревнования 2vs2</p>
                                {
                                    // dva.map((e, i) =>
                                    <ul class='event-item'>
                                        <li>
                                            <span>
                                                <img src="/images/achivements-event/calendar.svg" alt="data" className="achivements-icons"></img>
                                            </span>
                                            <span>Дата:</span>
                                            <span class="event-item-value">12.02.2022</span>
                                        </li>

                                        <li>
                                            <span>
                                                <img src="/images/achivements-event/goal.svg" alt="goal"></img>
                                            </span>
                                            <span>Забито:</span>
                                            <span class="event-item-value">12</span>
                                        </li>

                                        <li>
                                            <span>
                                                <img src="/images/achivements-event/spin.svg" alt="spin"></img>
                                            </span>
                                            <span>Пропущенно:</span>
                                            <span class="event-item-value">22</span>
                                        </li>

                                        <li>
                                            <span>
                                                <img src="/images/achivements-event/badge.svg" alt="badge"></img>
                                            </span>
                                            <span>Общая оценка:</span>
                                            <span class="event-item-value">2</span>
                                        </li>
                                    </ul>
                                    // )
                                }
                                
                            </li>
                            <li>
                                <p>Соревнования 3vs3</p>
                                {
                                    tre.map((e, i) =>
                                        <ul class='event-item'>
                                            <li>Дата: <p>{e.date}</p></li>
                                            <li>Забито: <p>{e.zabito}</p></li>
                                            <li>Пропущенно: <p>{e.propush}</p></li>
                                            <li>Общая оценка: <p>{e.mark}</p></li>
                                        </ul>
                                    )
                                }
                            </li>

                            <li>
                                <p>Пенальти</p>
                                {
                                    penal.map((e, i) =>
                                        <ul class='event-item'>
                                            <li>Дата: <p>{e.date}</p></li>
                                            <li>Забито: <p>{e.zabito}</p></li>
                                            <li>Пропущенно: <p>{e.propush}</p></li>
                                            <li>Общая оценка: <p>{e.mark}</p></li>
                                        </ul>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }

}
