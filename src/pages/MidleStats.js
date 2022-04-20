import React, { useState } from "react";
import { BestStats } from "./BestStats";

export const MiddleStats = ({ selfBest, playerArray }) => {
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = React.useState()
    const [showBest, setShowBest] = useState(false)

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
                            <span class="text-theme-show">Лучшие результаты</span>
                            <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                        </div>
                        <div class="middle_stats-container">
                            <div class="date-select">
                                <label>Выберите год рождения спортсмена</label>
                                <select value={selectedOption} name="Выберите год рождения" onChange={handleChange}>
                                    <option selected disabled>Выберите год</option>
                                    {
                                        options.sort((a, b) => a - b).map((e) =>
                                            <option>{e}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <BestStats show={showBest} year={selectedOption} playerArray={playerArray} selfBest={selfBest} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};
