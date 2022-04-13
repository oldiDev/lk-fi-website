import React, { useState } from "react";
import axios from "axios";
import { BestStats } from "./BestStats";

export const MiddleStats = ({ stats, playerArray }) => {
    const [show, setShow] = useState(false);
    const [player, setPlayer] = React.useState([]);
    const [loading, setLoading] = React.useState([])
    const [selectedOption, setSelectedOption] = React.useState()
    const [showBest, setShowBest] = useState(false)

    React.useEffect(() => {
        // fetchDataPlayer();

        const fetchStat = async () => {
            setLoading(true);
            const res = await axios.get('https://cdn.lk-ft.ru/footballers');
            setPlayer(res.data)
            setLoading(false);
        }

        fetchStat();
    }, []);

    const options = [];
    player.forEach(e => {
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
                        <span>Средний результат</span>
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
                        <div class="text-theme-show" onClick={() => setShow(false)} >
                            <span class="text-theme-show">Средний результат</span>
                            <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                        </div>
                        <div class="middle_stats-container">
                            <div class="date-select">
                                <label>Выберите год рождения спортсмена</label>
                                <select value={selectedOption} name="Выберите год рождения" onChange={handleChange}>
                                    {
                                        options.sort((a, b) => a - b).map((e) =>
                                            <option>{e}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <BestStats stats={stats} show={showBest} year={selectedOption} playerArray={playerArray} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};
