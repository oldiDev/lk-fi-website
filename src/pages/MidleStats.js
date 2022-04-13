import React, { useState } from "react";
import axios from "axios";

export const MiddleStats = ({ stats }) => {
    /* console.log("stats",stats); */
    const [show, setShow] = useState(false);
    const [player, setPlayer] = React.useState([]);
    const [loading, setLoading] = React.useState([])
    const [selectedOption, setSelectedOption] = React.useState()

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

    const options = [
        1991,
        1992,
        1993
    ]

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
        console.log(selectedOption)
    }


    var middle_number = stats.length;

    var middle_hit = 0;
    var middle_jump = 0;
    var middle_reaction = 0;
    var middle_speed = 0;
    let sharpshooting = 0;

    stats.map((e, i) => {
        middle_hit = Number(middle_hit) + Number(e.Hit);
        middle_jump = Number(middle_jump) + Number(e.Jump);
        middle_reaction = Number(middle_reaction) + Number(e.Reaction);
        middle_speed = Number(middle_speed) + Number(e.Speed);
        sharpshooting = (sharpshooting > e.sharpshooting) ? sharpshooting : e.sharpshooting;
    });
    if (middle_hit != 0)
        middle_hit = Math.round(Number(middle_hit) / Number(middle_number));
    if (middle_jump != 0)
        middle_jump = Math.round(Number(middle_jump) / Number(middle_number));
    if (middle_reaction != 0)
        middle_reaction = Math.round(Number(middle_reaction) / Number(middle_number));
    if (middle_speed != 0)
        middle_speed = Math.round(Number(middle_speed) / Number(middle_number));
    if (sharpshooting != 0) {
        sharpshooting = (sharpshooting > 100) ? Math.round(sharpshooting - 100) : Math.round(sharpshooting);
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
                                <select value={selectedOption} name="Выберите год рождения" onChange={ handleChange }>
                                    {
                                        options.map((e) =>
                                            <option>{e}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <ul>
                                <li>
                                    <div>
                                        <img src="/images/middle-stats/barbell.svg" alt='barbel' style={{ color: "#008CDB" }}></img>
                                    </div>
                                    <div>Удар:</div>
                                    <div className="middle-stats-value">{middle_hit}</div>
                                </li>
                                <li>
                                    <div>
                                        <img src="/images/middle-stats/jumps.svg" alt="jumps" style={{ color: "#25BA00" }}></img>
                                    </div>
                                    <div>Прыжок:</div>
                                    <div className="middle-stats-value">{middle_jump}</div>
                                </li>
                                <li>
                                    <div>
                                        <img src="/images/middle-stats/watch.svg" alt="time"></img>
                                    </div>
                                    <div>Реакция:</div>
                                    <div className="middle-stats-value">{middle_reaction}</div>
                                </li>
                                <li>
                                    <div>
                                        <img src="/images/middle-stats/speed.svg"></img>
                                    </div>
                                    <div>Скорость:</div>
                                    <div className="middle-stats-value">{middle_speed} км/ч</div>
                                </li>
                                <li>
                                    <div>
                                        <img src="/images/middle-stats/sharpshooting.svg"></img>
                                    </div>
                                    <div>Точность удара:</div>
                                    <div className="middle-stats-value">{sharpshooting} %</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};
