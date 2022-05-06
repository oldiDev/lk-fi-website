import React, { useState } from "react";
import "./information.css"

export const FullInformation = () => {
    const [show, setShow] = useState(false);

    if (!show) {
        return (
            <div class="achivements-information" onClick={() => setShow(true)}>Подробнее про "Достижения"</div>
        )
    } else {
        return (
            <>
                <div class="full-info-modal" >
                    <div class='information-title'>
                        <span>Достижения</span>
                        <div class="close-button" onClick={() => setShow(false)}></div>
                    </div>
                    <div class="information-for-what">
                        <span>Для чего нужны?</span>
                        <ul>
                            <li>
                                <div class="point"></div>
                                <span>Простая система обзора посещаемости и увлеченности вашего ребенка.</span>
                            </li>
                            <li>
                                <div class="point"></div>
                                <span>Возможность увидеть слабые и сильные стороны игрока.</span>
                            </li>
                            <li>
                                <div class="point"></div>
                                <span>Индивидуальные бонусы в зависимости от активности и достижений.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="information-bonuses">
                        <span>Бонусы в зависимости от индивидуальных достижений:</span>
                        <ul>
                            <li>
                                <span>25</span>
                                <div>-</div>
                                <div class="information-bonuses-text">
                                    <div>Скидка на абонемент 30%.</div>
                                    <div>1 персональная тренировка.</div>
                                </div>

                            </li>
                            <li>
                                <span>50</span>
                                <div>-</div>
                                <div class="information-bonuses-text">
                                    <div>Скидка на абонемент в 50%.</div>
                                    <div>2 Персональные тренировки.</div>
                                    <div>5% скидка в лагерь.</div>
                                </div>

                            </li>
                            <li>
                                <span>75</span>
                                <div>-</div>
                                <div class="information-bonuses-text">
                                    <div>Скидка на абонемент в 75%.</div>
                                    <div>3 Персональные тренировки.</div>
                                    <div>15% скидка на лагерь.</div>
                                </div>

                            </li>
                            <li>
                                <span>100</span>
                                <div>-</div>
                                <div class="information-bonuses-text">
                                    <div>Месячный абонемент.</div>
                                    <div>5 Персональных тренировок.</div>
                                    <div>25% скидка в лагерь</div>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="more-info-container">
                        <span className="more-info">О всех подробностях уточнайте у Вашего тренера</span>
                    </div>
                </div>
            </>
        )
    }

}