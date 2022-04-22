import React, { useState } from "react";
import ProgressBar from "../ProgressBar/progressBar";
import '../ProgressBar/progressBar.css'
import { FullInformation } from "./FullInformation";

export const FullGradde = ({ two, tre, camp, training, minusPoints }) => {
    const [show, setShow] = useState(false);

    var grade = two + tre + camp + training;

    let price = [25, 50, 75, 100];

    console.log(typeof (price))
    if (!show) {
        return (
            <section>
                <div class="achivements-container">
                    <div className="achivements-header">
                        <div class="achivements-title" style={{ cursor: 'pointer' }} onClick={() => setShow(true)}>
                            <span>Заработано баллов</span>
                            <img src="/images/client/right-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                        </div>
                        <FullInformation />
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section>
                <div>
                    <div class="achivements-container">
                        <div className="achivements-header">
                            <div class="achivements-title-show" style={{ cursor: 'pointer' }} onClick={() => setShow(false)}>
                                <span>Заработано баллов</span>
                                <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                            </div>
                            <FullInformation />
                        </div>
                        {/* <div class="achivements-title-show" style={{ cursor: 'pointer' }} >
                            <span>Заработано баллов</span>
                            <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                        </div> */}
                    </div>
                    <div class='inside-container'>
                        <div className="event-progress">
                            <span className="event-progress-label">Тренировки</span>
                            <ProgressBar bgcolor={'#25BA00'} completed={training} />
                        </div>
                        <div className="event-progress">
                            <span className="event-progress-label">Турнир 2 на 2</span>
                            <ProgressBar bgcolor={'#25BA00'} completed={two} />
                        </div>
                        <div className="event-progress">
                            <span className="event-progress-label">Турнир 3 на 3</span>
                            <ProgressBar bgcolor={'#25BA00'} completed={tre} />
                        </div>
                        <div className="event-progress">
                            <span className="event-progress-label">Лагерь</span>
                            <ProgressBar bgcolor={'#25BA00'} completed={camp} />
                        </div>
                        <div className="event-progress">
                            <span className="event-progress-label" id="fullGrade">Всего заработанно баллов</span>
                            <ProgressBar bgcolor={'#25BA00'} completed={grade} />
                        </div>
                        <div className="event-progress">
                            <span className="event-progress-label" id="fullGrade">Доступно баллов</span>
                            <ProgressBar bgcolor={'#25BA00'} completed={grade - minusPoints} />
                        </div>
                        <div className="event-progress" id="last-line">
                            <span></span>
                            <div className="label-line">
                                <span style={{left:"22%"}} className="labelStyles" id="line-progress">25</span>
                                <span style={{left:"42%"}} className="labelStyles" id="line-progress">50</span>
                                <span style={{left:"61%"}} className="labelStyles" id="line-progress">75</span>
                                <span style={{left:"77%"}} className="labelStyles" id="line-progress">100</span>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        )
    }

}