import React, { useState } from "react";
import { BestStats } from "./BestStats";
import TestInfo from "./TestInfo";
import './testInfo.css'

export const MiddleStats = ({ selfBest, playerArray }) => {
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = React.useState()
    const [showBest, setShowBest] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const options = [];
    playerArray.forEach(e => {
        if (!options.includes(e.birthday.split('-')[0])) {
            options.push(e.birthday.split('-')[0])
        }
    });

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
        setShowBest(true)
    }
    // console.log(showInfo)

    let showInfoFunction = () => {
        setShowInfo(!showInfo)
    }

    if (!show) {
        return (
            <div className="container">
                <section className="section-header-2">
                    <div class="text-theme" onClick={() => setShow(true)}>
                        <span>Лучшие результаты</span>
                        <img src="/images/client/right-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                    </div>
                </section>
            </div>
        );
    } else {
        return (
            <div className="container">
                <section className="section-header-2">
                    <div>
                        <div class="text-theme-show" onClick={() => {
                            setShow(false);
                            setShowBest(false);
                        }} >
                            <div>
                                <span class="text-theme-show">Лучшие результаты</span>
                                <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                            </div>
                        </div>
                        <div class="middle_stats-container">
                            <div class="date-select">
                                <label>Выберите год рождения спортсмена</label>
                                <select value={selectedOption} name="Выберите год рождения" onChange={handleChange}>
                                    <option selected disabled>Выберите год</option>
                                    {
                                        options.sort((a, b) => a - b).map((e, i) =>
                                            <option key={i}>{e}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <BestStats show={showBest} year={selectedOption} selfBest={selfBest} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};
