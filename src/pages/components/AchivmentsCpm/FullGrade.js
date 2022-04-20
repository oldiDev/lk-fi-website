import React, { useState } from "react";
import ProgressBar from "../ProgressBar/progressBar";
import '../ProgressBar/progressBar.css'

export const FullGradde = ({ two, tre, camp, training, minusPoints }) => {
    const [show, setShow] = useState(false);

    var grade = two + tre + camp + training;

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
                        {/* <div className="event-progress">
                            <span></span>
                            <div className="containerStyles" id="line-progress">
                                <span id="a25">25</span>
                                <span id="a50">50</span>
                                <span id="a75">75</span>
                                <span id='a100'>100</span>
                            </div>

                        </div> */}
                    </div>

                </div>
            </section>
        )
    }

}