import React, { useState } from "react";
import ProgressBar from "../ProgressBar/progressBar";

export const FullGradde = ({ two, tre, penal, camp, training, minusPoints }) => {
    const [show, setShow] = useState(false);

    var grade = two + tre + penal + camp + training;

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
                        <div className="event-progress">
                            <span>Тренировки</span>
                            <ProgressBar bgcolor={'#25BA00'} completed={training} />
                        </div>
                        <div className="event-progress">
                            <span>Турнир 2 на 2</span>
                            <ProgressBar bgcolor={'#25BA00'} completed={two} />
                        </div>
                        <div className="event-progress">
                            <span>Турнир 3 на 3</span>
                            <ProgressBar bgcolor={'#25BA00'} completed={tre} />
                        </div>
                        <div className="event-progress">
                            <span>Лагерь</span>
                            <ProgressBar bgcolor={'#25BA00'} completed={camp} />
                        </div>
                        <div className="event-progress">
                            <span id="fullGrade">Всего заработанно баллов</span>
                            <ProgressBar bgcolor={'#25BA00'} completed={grade} />
                        </div>
                        <div className="event-progress">
                            <span id="fullGrade">Доступно баллов</span>
                            <ProgressBar bgcolor={'#25BA00'} completed={grade - minusPoints} />
                        </div>

                        {/* <ul class='event-item'>
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
                                <span class="event-item-value">{camp}</span>
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
                        </ul> */}
                    </div>

                </div>
            </section>
        )
    }

}