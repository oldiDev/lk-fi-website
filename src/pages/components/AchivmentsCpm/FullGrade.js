import React, { useState } from "react";

export const FullGradde = ({ two, tre, penal }) => {
    const [show, setShow] = useState(false);

    var grade = two + tre + penal;

    if (!show) {
        return (
            <section>
                <div class="achivements-container" onClick={() => setShow(true)}>
                    <div class="achivements-title" style={{ cursor: 'pointer' }}>
                        <span>Заработано баллов</span>
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
                        <div class="achivements-title-show" style={{ cursor: 'pointer' }} >
                            <span>Заработано баллов</span>
                            <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                        </div>
                    </div>
                    <div class='inside-container'>
                        <ul class='event-item'>
                            <li>
                                <span>
                                    <img src="/images/achivements-full-grade/allPoints.svg" alt="all-points" className="achivements-icons"></img>
                                </span>
                                <span>Всего заработано баллов:</span>
                                <span class="event-item-value">{grade}</span>
                            </li>
                            <li>
                                <span>
                                    <img src="/images/achivements-full-grade/camp.svg" alt="camp" className="achivements-icons"></img>
                                </span>
                                <span>Лагерь:</span>
                                <span class="event-item-value">?</span>
                            </li>
                            <li>
                                <span>
                                    <img src="/images/achivements-full-grade/2vs2.svg" alt="2vs2-points" className="achivements-icons"></img>
                                </span>
                                <span>2 против 2:</span>
                                <span class="event-item-value">{two}</span>
                            </li>
                            <li>
                                <span>
                                    <img src="/images/achivements-full-grade/3vs3.svg" alt="3vs3-points" className="achivements-icons"></img>
                                </span>
                                <span>3 против 3:</span>
                                <span class="event-item-value">{tre}</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        )
    }

}