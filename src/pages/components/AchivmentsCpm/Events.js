import React, { useState } from "react";

export const Events = ({ dva, tre, penal }) => {


    const [show, setShow] = useState(false);

    if (!show) {
        return (
            <section>
                <div class="achivements-container" onClick={() => setShow(true)}>
                    <div class="achivements-title" style={{ cursor: 'pointer' }}>
                        <span>Мероприятия</span>
                        <img src="/images/client/right-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                    </div>
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
                                <div class="events-repeateable">
                                    {
                                        dva.map((e, i) =>
                                            <ul class='event-item'>
                                                <li>
                                                    <span>
                                                        <img src="/images/achivements-event/calendar.svg" alt="data" className="achivements-icons"></img>
                                                    </span>
                                                    <span>Дата:</span>
                                                    <span class="event-item-value">{e.date}</span>
                                                </li>

                                                <li>
                                                    <span>
                                                        <img src="/images/achivements-event/goal.svg" alt="goal"></img>
                                                    </span>
                                                    <span>Забито:</span>
                                                    <span class="event-item-value">{e.zabito}</span>
                                                </li>

                                                <li>
                                                    <span>
                                                        <img src="/images/achivements-event/spin.svg" alt="spin"></img>
                                                    </span>
                                                    <span>Пропущенно:</span>
                                                    <span class="event-item-value">{e.propush}</span>
                                                </li>

                                                <li>
                                                    <span>
                                                        <img src="/images/achivements-event/badge.svg" alt="badge"></img>
                                                    </span>
                                                    <span>Общая оценка:</span>
                                                    <span class="event-item-value">{e.mark}</span>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </div>
                            </li>
                            <li>
                                <p>Соревнования 3vs3</p>
                                <div class="events-repeateable">
                                    {
                                        tre.map((e, i) =>
                                            <ul class='event-item'>
                                                <li>
                                                    <span>
                                                        <img src="/images/achivements-event/calendar.svg" alt="data" className="achivements-icons"></img>
                                                    </span>
                                                    <span>Дата:</span>
                                                    <span class="event-item-value">{e.date}</span>
                                                </li>

                                                <li>
                                                    <span>
                                                        <img src="/images/achivements-event/goal.svg" alt="goal"></img>
                                                    </span>
                                                    <span>Забито:</span>
                                                    <span class="event-item-value">{e.zabito}</span>
                                                </li>

                                                <li>
                                                    <span>
                                                        <img src="/images/achivements-event/spin.svg" alt="spin"></img>
                                                    </span>
                                                    <span>Пропущенно:</span>
                                                    <span class="event-item-value">{e.propush}</span>
                                                </li>

                                                <li>
                                                    <span>
                                                        <img src="/images/achivements-event/badge.svg" alt="badge"></img>
                                                    </span>
                                                    <span>Общая оценка:</span>
                                                    <span class="event-item-value">{e.mark}</span>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </div>

                            </li>

                            <li>
                                <p>Пенальти</p>
                                <div class="events-repeateable">
                                    {
                                        penal.map((e, i) =>
                                            <ul class='event-item'>
                                                <li>
                                                    <span>
                                                        <img src="/images/achivements-event/calendar.svg" alt="data" className="achivements-icons"></img>
                                                    </span>
                                                    <span>Дата:</span>
                                                    <span class="event-item-value">{e.date}</span>
                                                </li>

                                                <li>
                                                    <span>
                                                        <img src="/images/achivements-event/goal.svg" alt="goal"></img>
                                                    </span>
                                                    <span>Забито:</span>
                                                    <span class="event-item-value">{e.zabito}</span>
                                                </li>

                                                <li>
                                                    <span>
                                                        <img src="/images/achivements-event/spin.svg" alt="spin"></img>
                                                    </span>
                                                    <span>Пропущенно:</span>
                                                    <span class="event-item-value">{e.propush}</span>
                                                </li>

                                                <li>
                                                    <span>
                                                        <img src="/images/achivements-event/badge.svg" alt="badge"></img>
                                                    </span>
                                                    <span>Общая оценка:</span>
                                                    <span class="event-item-value">{e.mark}</span>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }

}
