import React from "react";

export const BestStats = ({ show, year, playerArray, selfBest }) => {

    let middleHit = 0;
    let middleJump = 0;
    let middleJump2 = 0;
    let middleReaction = 0;
    let middleSpeed = 0;
    let middleSpeed2 = 0;
    let middleSpeed_s_razbegu = 0;
    let middleSpeed_s_razbegu2 = 0;
    let middleSharpshooting = 0;
    let middleAgility = 0;
    let middleFootSkill = 0;
    let middleFootSkill_hits = 0;

    var hit = 0;
    var jump = 0;
    var jump2 = 0;
    var reaction = 999999;
    var speed = 0;
    var speed2 = 999999;
    var speed_s_razbegu = 0;
    var speed_s_razbegu2 = 9999;
    let sharpshooting = 0;
    let agility = 99999;
    let footSkill = 0;
    let footSkill_hits = 0;


    const result = playerArray.filter(e => e.birthday.split('-')[0] == year)
    console.log(result);
    result.map(e => {
        e.Statistics.map(f => {


            middleHit += Number(f.Hit);
            middleJump += Number(f.Jump);
            middleJump2 += Number(f.Jump2);
            middleReaction += Number(f.Reaction);
            middleSpeed += Number(f.Speed);
            middleSpeed2 += Number(f.Speed2);
            middleSpeed_s_razbegu += Number(f.Speed_s_razbega);
            middleSpeed_s_razbegu2 += Number(f.Speed_s_razbega2);
            middleSharpshooting += Number(f.sharpshooting);
            middleAgility += Number(f.Agility);
            middleFootSkill += Number(f.FootSkill);
            middleFootSkill_hits += Number(f.FootSkill2);


            hit = (Number(hit) > Number(f.Hit)) ? Number(hit) : Number(f.Hit);
            jump = (Number(jump) > Number(f.Jump)) ? Number(jump) : Number(f.Jump);
            jump2 = (Number(jump2) > Number(f.Jump2)) ? Number(jump2) : Number(f.Jump2);
            reaction = (Number(reaction) < Number(f.Reaction)) ? Number(reaction) : Number(f.Reaction);
            speed = (Number(speed) > Number(f.Speed)) ? Number(speed) : Number(f.Speed);
            speed2 = (Number(speed2) < Number(f.Speed2)) ? Number(speed2) : Number(f.Speed2);
            speed_s_razbegu = (Number(speed_s_razbegu) > Number(f.Speed_s_razbega)) ? Number(speed_s_razbegu) : Number(f.Speed_s_razbega);
            speed_s_razbegu2 = (Number(speed_s_razbegu2) < Number(f.Speed_s_razbega2)) ? Number(speed_s_razbegu2) : Number(f.Speed_s_razbega2);
            sharpshooting = (Number(sharpshooting) > Number(f.sharpshooting)) ? Number(sharpshooting) : Number(f.sharpshooting);
            agility = (Number(agility) < Number(f.Agility)) ? Number(agility) : Number(f.Agility);
            footSkill = (Number(footSkill) > Number(f.FootSkill)) ? Number(footSkill) : Number(f.FootSkill);
            footSkill_hits = (Number(footSkill_hits) > Number(f.FootSkill2)) ? Number(footSkill_hits) : Number(f.FootSkill2);
        })
        if (e.Statistics.length != 0) {
            middleHit = middleHit / e.Statistics.length;
            middleJump = middleJump / e.Statistics.length;
            middleJump2 = middleJump2 / e.Statistics.length;
            middleReaction = middleReaction / e.Statistics.length;
            middleSpeed = middleSpeed / e.Statistics.length;
            middleSpeed2 = middleSpeed2 / e.Statistics.length;
            middleSpeed_s_razbegu = middleSpeed_s_razbegu / e.Statistics.length;
            middleSpeed_s_razbegu2 = middleSpeed_s_razbegu2 / e.Statistics.length;
            middleSharpshooting = middleSharpshooting / e.Statistics.length;
            middleAgility = middleAgility / e.Statistics.length;
            middleFootSkill = middleFootSkill / e.Statistics.length;
            middleFootSkill_hits = middleFootSkill_hits / e.Statistics.length;
        }
    })
    if (result.length != 0) {
        middleHit = middleHit / result.length;
        middleJump = middleJump / result.length;
        middleJump2 = middleJump2 / result.length;
        middleReaction = middleReaction / result.length;
        middleSpeed = middleSpeed / result.length;
        middleSpeed2 = middleSpeed2 / result.length;
        middleSpeed_s_razbegu = middleSpeed_s_razbegu / result.length;
        middleSpeed_s_razbegu2 = middleSpeed_s_razbegu2 / result.length;
        middleSharpshooting = middleSharpshooting / result.length;
        middleAgility = middleAgility / result.length;
        middleFootSkill = middleFootSkill / result.length;
        middleFootSkill_hits = middleFootSkill_hits / result.length;
    }

    let bestHit = 0;
    let bestJump = 0;
    let bestJump2 = 0;
    let bestReaction = 999999;
    let bestSpeed = 0;
    let bestSpeed2 = 99999;
    let bestSpeed_s_razbegu = 0;
    let bestSpeed_s_razbegu2 = 99999;
    let bestSharpshooting = 0;
    let bestAgility = 999999;
    let bestFootSkill = 0;
    let bestFootSkill_hits = 0;

    selfBest.map(e => {
        bestHit = (bestHit > Number(e.Hit)) ? bestHit : Number(e.Hit);
        bestJump = (bestJump > Number(e.Jump)) ? bestJump : Number(e.Jump);
        bestJump2 = (bestJump2 > Number(e.Jump2)) ? bestJump2 : Number(e.Jump2);
        bestReaction = (bestReaction < Number(e.Reaction)) ? bestReaction : Number(e.Reaction);
        bestSpeed = (bestSpeed > Number(e.Speed)) ? bestSpeed : Number(e.Speed);
        bestSpeed2 = (bestSpeed2 < Number(e.Speed2)) ? bestSpeed2 : Number(e.Speed2);
        bestSpeed_s_razbegu = (bestSpeed_s_razbegu > Number(e.Speed_s_razbega)) ? bestSpeed2 : Number(e.Speed_s_razbega);
        bestSpeed_s_razbegu2 = (bestSpeed_s_razbegu2 < Number(e.Speed_s_razbega2)) ? bestSpeed_s_razbegu2 : Number(e.Speed_s_razbega2);
        bestSharpshooting = (bestSharpshooting > Number(e.sharpshooting)) ? bestSharpshooting : Number(e.sharpshooting);
        bestAgility = (bestAgility < Number(e.Agility)) ? bestAgility : Number(e.Agility);
        bestFootSkill = (bestFootSkill > Number(e.FootSkill)) ? bestFootSkill : Number(e.FootSkill);
        bestFootSkill_hits = (bestFootSkill_hits > Number(e.FootSkill2)) ? bestFootSkill_hits : Number(e.FootSkill2);
    })

    function declOfNum(n) {
        const text_forms = ["удар", "удара", "ударов"]
        n = Math.abs(n) % 100;
        var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    }


    if (sharpshooting != 0) {
        sharpshooting = (sharpshooting > 100) ? Math.round(sharpshooting - 100) : Math.round(sharpshooting);
    }

    if (show) {
        return (
            <div>
                <table class="best-stat-table">
                    <thead>
                        <th></th>
                        <th className="table-header" scope="col">
                            <div>
                                <img src="/images/middle-stats/barbell.svg" alt='barbel' style={{ color: "#008CDB" }}></img>
                            </div>
                            <div>Сила удара</div>
                        </th>
                        <th className="table-header" scope="col">
                            <div>
                                <img src="/images/middle-stats/jumps.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в высоту</div>
                        </th>
                        <th className="table-header" scope="col">
                            <div>
                                <img src="/images/middle-stats/jumps-length.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в длинну</div>
                        </th>
                        <th className="table-header" scope="col">
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Реакция</div>
                        </th>
                        <th className="table-header" scope="col">
                            <div>
                                <img src="/images/middle-stats/speed.svg" alt="speed"></img>
                            </div>
                            <div>10 метров с места</div>
                        </th>
                        <th className="table-header" scope="col">
                            <div>
                                <img src="/images/middle-stats/speed.svg" alt="speed"></img>
                            </div>
                            <div>10 метров с разбега</div>
                        </th>
                        <th className="table-header" scope="col">
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="speed"></img>
                            </div>
                            <div>Agility test</div>
                        </th>
                        <th className="table-header" scope="col">
                            <div>
                                <img src="/images/middle-stats/speed.svg" alt="speed"></img>
                            </div>
                            <div>FootSkill test</div>
                        </th>
                        <th className="table-header" scope="col" id="last-th">
                            <div>
                                <img src="/images/middle-stats/sharpshooting.svg" alt="sharpshooting"></img>
                            </div>
                            <div>Точность</div>
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-cell" scope="row">Мой лучший результат</td>
                            <td className="table-cell">{Math.round(bestHit)} км/ч</td>
                            <td className="table-cell">{Math.round(bestJump)} см</td>
                            <td className="table-cell">{Math.round(bestJump2)} см</td>
                            <td className="table-cell">{Math.round(bestReaction)} мс</td>
                            <td className="table-cell">
                                <div>{Math.round(bestSpeed)} км/ч</div>
                                <div>{Math.round(bestSpeed2)} c</div>
                            </td>
                            <td className="table-cell">
                                <div>{Math.round(bestSpeed_s_razbegu)} км/ч</div>
                                <div>{Math.round(bestSpeed_s_razbegu2)} c</div>
                            </td>
                            <td className="table-cell">{bestAgility.toFixed(3)} с</td>
                            <td className="table-cell">
                                <div>{bestFootSkill.toFixed(2)} c</div>
                                <div>({Math.round(bestFootSkill_hits)} {declOfNum(bestFootSkill_hits)})</div>
                            </td>
                            <td className="last-cell table-cell">{Math.round(bestSharpshooting)} %</td>
                        </tr>
                        <tr>
                            <td className="table-cell" scope="row">Средний по возрасту</td>
                            <td className="table-cell">{Math.round(middleHit)} км/ч</td>
                            <td className="table-cell">{Math.round(middleJump)} см</td>
                            <td className="table-cell">{Math.round(middleJump2)} см</td>
                            <td className="table-cell">{Math.round(middleReaction)} мс</td>
                            <td className="table-cell">
                                <div>{Math.round(middleSpeed)} км/ч</div>
                                <div>{Math.round(middleSpeed2)} c</div>
                            </td>
                            <td className="table-cell">
                                <div>{Math.round(middleSpeed_s_razbegu)} км/ч</div>
                                <div>{Math.round(middleSpeed_s_razbegu2)} c</div>
                            </td>
                            <td className="table-cell">{middleAgility.toFixed(3)} с</td>
                            <td className="table-cell">
                                <div>{middleFootSkill.toFixed(2)} c</div>
                                <div>({Math.round(middleFootSkill_hits)} {declOfNum(middleFootSkill_hits)})</div>
                            </td>
                            <td className="last-cell table-cell">{Math.round(middleSharpshooting)} %</td>
                        </tr>
                        <tr>
                            <td scope="row" className="last-row table-cell">Лучший результат</td>
                            <td className="last-row table-cell">{Math.round(hit)} км/ч</td>
                            <td className="last-row table-cell">{Math.round(jump)} см</td>
                            <td className="last-row table-cell">{Math.round(jump2)} см</td>
                            <td className="last-row table-cell">{Math.round(reaction)} мс</td>
                            <td className="last-row table-cell">
                                <div>{Math.round(speed)} км/ч</div>
                                <div>{Math.round(speed2)} c</div>
                            </td>
                            <td className="last-row table-cell">
                                <div>{Math.round(speed_s_razbegu)} км/ч</div>
                                <div>{Math.round(speed_s_razbegu2)} c</div>
                            </td>
                            <td className="last-row table-cell">{agility.toFixed(3)} с</td>
                            <td className="last-row table-cell">
                                <div>{footSkill.toFixed(2)} c</div>
                                <div>({Math.round(footSkill_hits)} {declOfNum(footSkill_hits)})</div>
                            </td>
                            <td className="last-row last-cell table-cell">{Math.round(sharpshooting)} %</td>
                        </tr>
                    </tbody>
                </table>
                <div className="best-stats-container">
                    <div class="middle-stats-label">
                        Мой лучший рез-т
                    </div>
                    <ul>
                        <li>
                            <div>
                                <img src="/images/middle-stats/barbell.svg" alt='barbel' style={{ color: "#008CDB" }}></img>
                            </div>
                            <div>Сила удара:</div>
                            <div className="middle-stats-value">{Math.round(bestHit)} км/ч</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/jumps.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в высоту:</div>
                            <div className="middle-stats-value">{Math.round(bestJump)} см</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/jumps-length.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в длинну:</div>
                            <div className="middle-stats-value">{Math.round(bestJump2)} см</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Реакция:</div>
                            <div className="middle-stats-value">{Math.round(bestReaction)} мс</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>10 метров с места:</div>
                            <div className="middle-stats-value">{Math.round(bestSpeed)} км/ч</div>
                            <div className="middle-stats-value">{Math.round(bestSpeed2)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>10 метров с разбега:</div>
                            <div className="middle-stats-value">{Math.round(bestSpeed_s_razbegu)} км/ч</div>
                            <div className="middle-stats-value">{Math.round(bestSpeed_s_razbegu2)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Agility test:</div>
                            <div className="middle-stats-value">{bestAgility.toFixed(3)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>FootSkill test:</div>
                            <div className="middle-stats-value">{bestFootSkill.toFixed(2)} c</div>
                            <div className="middle-stats-value">({Math.round(bestFootSkill_hits)} {declOfNum(bestFootSkill_hits)})</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/sharpshooting.svg"></img>
                            </div>
                            <div>Точность удара:</div>
                            <div className="middle-stats-value">{Math.round(bestSharpshooting)} %</div>
                        </li>
                    </ul>
                    <div class="long-green-line" id="middle-stats-green-line"></div>
                    <div class="middle-stats-label">
                        Средний по возрасту
                    </div>
                    <ul>
                        <li>
                            <div>
                                <img src="/images/middle-stats/barbell.svg" alt='barbel' style={{ color: "#008CDB" }}></img>
                            </div>
                            <div>Сила удара:</div>
                            <div className="middle-stats-value">{Math.round(middleHit)} км/ч</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/jumps.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в высоту:</div>
                            <div className="middle-stats-value">{Math.round(middleJump)} см</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/jumps-length.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в длинну:</div>
                            <div className="middle-stats-value">{Math.round(middleJump2)} см</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Реакция:</div>
                            <div className="middle-stats-value">{Math.round(middleReaction)} мс</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>10 метров с места:</div>
                            <div className="middle-stats-value">{Math.round(middleSpeed)} км/ч</div>
                            <div className="middle-stats-value">{Math.round(middleSpeed2)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>10 метров с разбега:</div>
                            <div className="middle-stats-value">{Math.round(middleSpeed_s_razbegu)} км/ч</div>
                            <div className="middle-stats-value">{Math.round(middleSpeed_s_razbegu2)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Agility test:</div>
                            <div className="middle-stats-value">{middleAgility.toFixed(3)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>FootSkill test:</div>
                            <div className="middle-stats-value">{middleFootSkill.toFixed(2)} c</div>
                            <div className="middle-stats-value">({Math.round(middleFootSkill_hits)} {declOfNum(middleFootSkill_hits)})</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/sharpshooting.svg"></img>
                            </div>
                            <div>Точность удара:</div>
                            <div className="middle-stats-value">{Math.round(middleSharpshooting)} %</div>
                        </li>
                    </ul>
                    <div class="long-green-line" id="middle-stats-green-line"></div>
                    <div class="middle-stats-label">Лучший результат</div>
                    <ul>
                        <li>
                            <div>
                                <img src="/images/middle-stats/barbell.svg" alt='barbel' style={{ color: "#008CDB" }}></img>
                            </div>
                            <div>Сила удара:</div>
                            <div className="middle-stats-value">{Math.round(hit)} км/ч</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/jumps.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в высоту:</div>
                            <div className="middle-stats-value">{Math.round(jump)} см</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/jumps-length.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в длинну:</div>
                            <div className="middle-stats-value">{Math.round(jump2)} см</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Реакция:</div>
                            <div className="middle-stats-value">{Math.round(reaction)} мс</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>10 метров с места:</div>
                            <div className="middle-stats-value">{Math.round(speed)} км/ч</div>
                            <div className="middle-stats-value">{Math.round(speed2)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>10 метров с разбега:</div>
                            <div className="middle-stats-value">{Math.round(speed_s_razbegu)} км/ч</div>
                            <div className="middle-stats-value">{Math.round(speed_s_razbegu2)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Agility test:</div>
                            <div className="middle-stats-value">{agility.toFixed(3)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>FootSkill test:</div>
                            <div className="middle-stats-value">{footSkill.toFixed(2)} c</div>
                            <div className="middle-stats-value">({Math.round(footSkill_hits)} {declOfNum(footSkill_hits)})</div>
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
        );
    } else {
        return (
            <></>
        )
    }
}