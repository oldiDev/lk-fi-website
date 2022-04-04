import React, { useState } from "react";

export const MiddleStats = ({ stats }) => {
    /* console.log("stats",stats); */
    const [show, setShow] = useState(false);
    var middle_number = stats.length;

    var middle_hit = 0;
    var middle_jump = 0;
    var middle_reaction = 0;
    var middle_speed = 0;

    stats.map((e, i) => {
        middle_hit = Number(middle_hit) + Number(e.Hit);
        middle_jump = Number(middle_jump) + Number(e.Jump);
        middle_reaction = Number(middle_reaction) + Number(e.Reaction);
        middle_speed = Number(middle_speed) + Number(e.Speed);
    });
    if (middle_hit != 0)
        middle_hit = Math.round(Number(middle_hit) / Number(middle_number));
    if (middle_jump != 0)
        middle_jump = Math.round(Number(middle_jump) / Number(middle_number));
    if (middle_reaction != 0)
        middle_reaction = Math.round(
            Number(middle_reaction) / Number(middle_number)
        );
    if (middle_speed != 0)
        middle_speed = Math.round(Number(middle_speed) / Number(middle_number));

    /*     console.log("h",middle_hit) 
      console.log("j",middle_jump) 
      console.log("r",middle_reaction) 
      console.log("s",middle_speed)  */
    if (!show) {
        return (
            <div className="container">
                <section className="section-header-2" style={{ marginBottom: "-20px" }}>
                    <h2
                        class="title"
                        onClick={() => setShow(true)}
                        style={{ cursor: "pointer" }}
                    >
                        <span class="text-theme">Средний результат</span>
                    </h2>
                </section>
            </div>
        );
    } else {
        return (
            <div className="container">
                <section className="section-header-2" style={{ marginBottom: "-20px" }}>
                    <div class="container ">
                        <h2
                            class="title"
                            onClick={() => setShow(false)}
                            style={{ cursor: "pointer" }}
                        >
                            <span class="text-theme-show">Средний результат</span>
                        </h2>
                        <div class="middle_stats-container">
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
                                    <div className="middle-stats-value">{middle_speed}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};
