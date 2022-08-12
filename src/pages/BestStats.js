import React, { useState } from "react";
import axios from "axios";

export const BestStats = ({ show, year, selfBest }) => {

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
    let footSkill = 99999;
    let footSkill_hits = 0;

    let middleHitNotNull = 0;
    let middleHit = 0;

    let middleJumpNotNull = 0;
    let middleJump = 0;

    let middleJump_2_NotNull = 0;
    let middleJump2 = 0;

    let middleReactionNotNull = 0;
    let middleReaction = 0;

    let middleSpeedNotNull = 0;
    let middleSpeed = 0;

    let middleSpeed_2_NotNull = 0;
    let middleSpeed2 = 0;

    let middleSpeed_s_razbegu_NotNull = 0;
    let middleSpeed_s_razbegu = 0;

    let middleSpeed_s_razbegu_2_NotNull = 0;
    let middleSpeed_s_razbegu2 = 0;

    let middleSharpshootingNotNull = 0;
    let middleSharpshooting = 0;

    let middleAgilityNotNull = 0;
    let middleAgility = 0;

    let middleFootSkillNotNull = 0;
    let middleFootSkill = 0;

    let middleFootSkill_hitsNotNull = 0;
    let middleFootSkill_hits = 0;

    const [resultByYear, setResultByYear] = useState([]);

    React.useEffect(() => {
        // fetchDataPlayer();
        const fetchStat = async () => {
            const res = await axios.get(`https://cdn.lk-ft.ru/footballers?birthday_gte=${year}-01-01&birthday_lte=${year}-12-31`);
            setResultByYear(res.data)
        }
        if (year)
            fetchStat();
    }, [year]);

    // console.log(result);
    if (year && resultByYear) {
        resultByYear.map(e => {

            e.Statistics.map(f => {


                middleHit += Number(f.Hit);
                middleJump += Number(f.Jump);
                middleJump2 += Number(f.Jump2);
                middleReaction += Number(f.Reaction)
                middleSpeed += Number(f.Speed);
                middleSpeed2 += Number(f.Speed2);
                middleSpeed_s_razbegu += Number(f.Speed_s_razbega);
                middleSpeed_s_razbegu2 += Number(f.Speed_s_razbega2);
                middleSharpshooting += Number(f.sharpshooting);
                middleAgility += Number(f.Agility);
                middleFootSkill += Number(f.FootSkill);
                middleFootSkill_hits += Number(f.FootSkill2);

                middleHitNotNull = (f.Hit == 0) ? middleHitNotNull : middleHitNotNull + 1;
                middleJumpNotNull = (f.Jump == 0) ? middleJumpNotNull : middleJumpNotNull + 1;
                middleJump_2_NotNull = (f.Jump2 == 0) ? middleJump_2_NotNull : middleJump_2_NotNull + 1;
                middleReactionNotNull = (f.Reaction == 0) ? middleReactionNotNull : middleReactionNotNull + 1;
                middleSpeedNotNull = (f.Speed == 0) ? middleSpeedNotNull : middleSpeedNotNull + 1;
                middleSpeed_2_NotNull = (f.Speed2 == 0) ? middleSpeed_2_NotNull : middleSpeed_2_NotNull + 1;
                middleSpeed_s_razbegu_NotNull = (f.Speed_s_razbega == 0) ? middleSpeed_s_razbegu_NotNull : middleSpeed_s_razbegu_NotNull + 1;
                middleSpeed_s_razbegu_2_NotNull = (f.Speed_s_razbega2 == 0) ? middleSpeed_s_razbegu_2_NotNull : middleSpeed_s_razbegu_2_NotNull + 1;
                middleSharpshootingNotNull = (f.sharpshooting == 0) ? middleSharpshootingNotNull : middleSharpshootingNotNull + 1;
                middleAgilityNotNull = (f.Agility == 0) ? middleAgilityNotNull : middleAgilityNotNull + 1;
                middleFootSkillNotNull = (f.FootSkill == 0) ? middleFootSkillNotNull : middleFootSkillNotNull + 1;
                middleFootSkill_hitsNotNull = (f.FootSkill2 == 0) ? middleFootSkill_hitsNotNull : middleFootSkill_hitsNotNull + 1;


                if (f.Hit != 0)
                    hit = (Number(hit) > Number(f.Hit)) ? Number(hit) : Number(f.Hit);
                if (f.Jump != 0)
                    jump = (Number(jump) > Number(f.Jump)) ? Number(jump) : Number(f.Jump);
                if (f.Jump2 != 0)
                    jump2 = (Number(jump2) > Number(f.Jump2)) ? Number(jump2) : Number(f.Jump2);
                if (f.Reaction != 0)
                    reaction = (Number(reaction) < Number(f.Reaction)) ? Number(reaction) : Number(f.Reaction);
                if (f.Speed != 0)
                    speed = (Number(speed) > Number(f.Speed)) ? Number(speed) : Number(f.Speed);
                if (f.Speed2 != 0)
                    speed2 = (Number(speed2) < Number(f.Speed2)) ? Number(speed2) : Number(f.Speed2);
                if (f.Speed_s_razbega != 0)
                    speed_s_razbegu = (Number(speed_s_razbegu) > Number(f.Speed_s_razbega)) ? Number(speed_s_razbegu) : Number(f.Speed_s_razbega);
                if (f.Speed_s_razbega2 != 0)
                    speed_s_razbegu2 = (Number(speed_s_razbegu2) < Number(f.Speed_s_razbega2)) ? Number(speed_s_razbegu2) : Number(f.Speed_s_razbega2);
                if (f.sharpshooting != 0)
                    sharpshooting = (Number(sharpshooting) > Number(f.sharpshooting)) ? Number(sharpshooting) : Number(f.sharpshooting);
                if (f.Agility != 0)
                    agility = (Number(agility) < Number(f.Agility)) ? Number(agility) : Number(f.Agility);
                if (f.FootSkill != 0)
                    footSkill = (Number(footSkill) < Number(f.FootSkill)) ? Number(footSkill) : Number(f.FootSkill);
                if (f.FootSkill2 != 0)
                    footSkill_hits = (Number(footSkill_hits) > Number(f.FootSkill2)) ? Number(footSkill_hits) : Number(f.FootSkill2);
            })
        })


        // console.log(middleJump2, middleJump_2_NotNull)
        middleHit = middleHitNotNull != 0 ? middleHit / middleHitNotNull : 0
        middleJump = middleJumpNotNull != 0 ? middleJump / middleJumpNotNull : 0
        middleJump2 = middleJump_2_NotNull != 0 ? middleJump2 / middleJump_2_NotNull : 0
        middleReaction = middleReactionNotNull != 0 ? middleReaction / middleReactionNotNull : 0
        middleSpeed = middleSpeedNotNull != 0 ? middleSpeed / middleSpeedNotNull : 0;
        middleSpeed2 = middleSpeed_2_NotNull != 0 ? middleSpeed2 / middleSpeed_2_NotNull : 0;
        middleSpeed_s_razbegu = middleSpeed_s_razbegu_NotNull != 0 ? middleSpeed_s_razbegu / middleSpeed_s_razbegu_NotNull : 0;
        middleSpeed_s_razbegu2 = middleSpeed_s_razbegu_2_NotNull != 0 ? middleSpeed_s_razbegu2 / middleSpeed_s_razbegu_2_NotNull : 0;
        middleSharpshooting = middleSharpshootingNotNull != 0 ? middleSharpshooting / middleSharpshootingNotNull : 0;
        middleAgility = middleAgilityNotNull != 0 ? middleAgility / middleAgilityNotNull : 0;
        middleFootSkill = middleFootSkillNotNull != 0 ? middleFootSkill / middleFootSkillNotNull : 0;
        middleFootSkill_hits = middleFootSkill_hitsNotNull != 0 ? middleFootSkill_hits / middleFootSkill_hitsNotNull : 0;
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
    let bestFootSkill = 99999;
    let bestFootSkill_hits = 0;

    selfBest.map(e => {
        if (e.Hit != 0)
            bestHit = (bestHit > Number(e.Hit)) ? bestHit : Number(e.Hit);
        if (e.Jump != 0)
            bestJump = (bestJump > Number(e.Jump)) ? bestJump : Number(e.Jump);
        if (e.Jump2 != 0)
            bestJump2 = (bestJump2 > Number(e.Jump2)) ? bestJump2 : Number(e.Jump2);
        if (e.Reaction != 0)
            bestReaction = (bestReaction < Number(e.Reaction)) ? bestReaction : Number(e.Reaction);
        if (e.Speed != 0)
            bestSpeed = (bestSpeed > Number(e.Speed)) ? bestSpeed : Number(e.Speed);
        if (e.Speed2 != 0)
            bestSpeed2 = (bestSpeed2 < Number(e.Speed2)) ? bestSpeed2 : Number(e.Speed2);
        if (e.Speed_s_razbega != 0)
            bestSpeed_s_razbegu = (bestSpeed_s_razbegu > Number(e.Speed_s_razbega)) ? bestSpeed_s_razbegu : Number(e.Speed_s_razbega);
        if (e.Speed_s_razbega2 != 0)
            bestSpeed_s_razbegu2 = (bestSpeed_s_razbegu2 < Number(e.Speed_s_razbega2)) ? bestSpeed_s_razbegu2 : Number(e.Speed_s_razbega2);
        if (e.sharpshooting != 0)
            bestSharpshooting = (bestSharpshooting > Number(e.sharpshooting)) ? bestSharpshooting : Number(e.sharpshooting);
        if (e.Agility != 0)
            bestAgility = (bestAgility < Number(e.Agility)) ? bestAgility : Number(e.Agility);
        if (e.FootSkill != 0)
            bestFootSkill = (bestFootSkill < Number(e.FootSkill)) ? bestFootSkill : Number(e.FootSkill);
        if (e.FootSkill2 != 0)
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

    if (show && resultByYear) {
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
                                <img src="/images/middle-stats/footSkill2.svg" alt="speed"></img>
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
                            <td className="table-cell">{bestHit == 0 ? '-' : Math.round(bestHit)} км/ч</td>
                            <td className="table-cell">{bestJump == 0 ? '-' : Math.round(bestJump)} см</td>
                            <td className="table-cell">{bestJump2 == 0 ? '-' : Math.round(bestJump2)} см</td>
                            <td className="table-cell">{bestReaction == 999999 ? '-' : Math.round(bestReaction)} мс</td>
                            <td className="table-cell">
                                <div>{bestSpeed == 0 ? '-' : bestSpeed.toFixed(2)} км/ч</div>
                                <div>{bestSpeed2 == 99999 ? '-' : bestSpeed2.toFixed(3)} c</div>
                            </td>
                            <td className="table-cell">
                                <div>{bestSpeed_s_razbegu == 0 ? '-' : bestSpeed_s_razbegu.toFixed(2)} км/ч</div>
                                <div>{bestSpeed_s_razbegu2 == 99999 ? '-' : bestSpeed_s_razbegu2.toFixed(3)} c</div>
                            </td>
                            <td className="table-cell">{bestAgility == 999999 ? '-' : bestAgility.toFixed(3)} с</td>
                            <td className="table-cell">
                                <div>{bestFootSkill == 99999 ? '-' : bestFootSkill.toFixed(2)} c</div>
                                <div>({bestFootSkill_hits == 0 ? '-' : Math.round(bestFootSkill_hits)} {declOfNum(bestFootSkill_hits)})</div>
                            </td>
                            <td className="last-cell table-cell">{bestSharpshooting == 0 ? '-' : Math.round(bestSharpshooting)} %</td>
                        </tr>
                        <tr>
                            <td className="table-cell" scope="row">Средний по возрасту</td>
                            <td className="table-cell">{middleHit == 0 ? '-' : Math.round(middleHit)} км/ч</td>
                            <td className="table-cell">{middleJump == 0 ? '-' : Math.round(middleJump)} см</td>
                            <td className="table-cell">{middleJump2 == 0 ? '-' : Math.round(middleJump2)} см</td>
                            <td className="table-cell">{middleReaction == 0 ? '-' : Math.round(middleReaction)} мс</td>
                            <td className="table-cell">
                                <div>{middleSpeed == 0 ? '-' : middleSpeed.toFixed(2)} км/ч</div>
                                <div>{middleSpeed2 == 0 ? '-' : middleSpeed2.toFixed(3)} c</div>
                            </td>
                            <td className="table-cell">
                                <div>{middleSpeed_s_razbegu == 0 ? '-' : middleSpeed_s_razbegu.toFixed(2)} км/ч</div>
                                <div>{middleSpeed_s_razbegu2 == 0 ? '-' : middleSpeed_s_razbegu2.toFixed(3)} c</div>
                            </td>
                            <td className="table-cell">{middleAgility == 0 ? '-' : middleAgility.toFixed(3)} с</td>
                            <td className="table-cell">
                                <div>{middleFootSkill == 0 ? "-" : middleFootSkill.toFixed(2)} c</div>
                                <div>({middleFootSkill_hits == 0 ? "-" : Math.round(middleFootSkill_hits)} {declOfNum(middleFootSkill_hits)})</div>
                            </td>
                            <td className="last-cell table-cell">{middleSharpshooting == 0 ? '-' : Math.round(middleSharpshooting)} %</td>
                        </tr>
                        <tr>
                            <td scope="row" className="last-row table-cell">Лучший результат</td>
                            <td className="last-row table-cell">{hit == 0 ? '-' : Math.round(hit)} км/ч</td>
                            <td className="last-row table-cell">{jump == 0 ? '-' : Math.round(jump)} см</td>
                            <td className="last-row table-cell">{jump2 == 0 ? '-' : Math.round(jump2)} см</td>
                            <td className="last-row table-cell">{reaction == 999999 ? '-' : Math.round(reaction)} мс</td>
                            <td className="last-row table-cell">
                                <div>{speed == 0 ? '-' : speed.toFixed(2)} км/ч</div>
                                <div>{speed2 == 999999 ? '-' : speed2.toFixed(3)} c</div>
                            </td>
                            <td className="last-row table-cell">
                                <div>{speed_s_razbegu == 0 ? '-' : speed_s_razbegu.toFixed(2)} км/ч</div>
                                <div>{speed_s_razbegu2 == 9999 ? '-' : speed_s_razbegu2.toFixed(3)} c</div>
                            </td>
                            <td className="last-row table-cell">{agility == 99999 ? '-' : agility.toFixed(3)} с</td>
                            <td className="last-row table-cell">
                                <div>{footSkill == 99999 ? '-' : footSkill.toFixed(2)} c</div>
                                <div>({footSkill_hits == 0 ? '-' : Math.round(footSkill_hits)} {declOfNum(footSkill_hits)})</div>
                            </td>
                            <td className="last-row last-cell table-cell">{sharpshooting == 0 ? '-' : Math.round(sharpshooting)} %</td>
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
                            <div className="middle-stats-value">{bestHit == 0 ? '-' : Math.round(bestHit)} км/ч</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/jumps.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в высоту:</div>
                            <div className="middle-stats-value">{bestJump == 0 ? '-' : Math.round(bestJump)} см</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/jumps-length.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в длинну:</div>
                            <div className="middle-stats-value">{bestJump2 == 0 ? '-' : Math.round(bestJump2)} см</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Реакция:</div>
                            <div className="middle-stats-value">{bestReaction == 999999 ? '-' : Math.round(bestReaction)} мс</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>10 метров с места:</div>
                            <div className="middle-stats-value">{bestSpeed == 0 ? '-' : bestSpeed.toFixed(3)} км/ч</div>
                            <div className="middle-stats-value">{bestSpeed2 == 99999 ? '-' : bestSpeed2.toFixed(3)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>10 метров с разбега:</div>
                            <div className="middle-stats-value">{bestSpeed_s_razbegu == 0 ? '-' : bestSpeed_s_razbegu.toFixed(3)} км/ч</div>
                            <div className="middle-stats-value">{bestSpeed_s_razbegu2 == 99999 ? '-' : bestSpeed_s_razbegu2.toFixed(3)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Agility test:</div>
                            <div className="middle-stats-value">{bestAgility == 999999 ? '-' : bestAgility.toFixed(3)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/footSkill2.svg"></img>
                            </div>
                            <div>FootSkill test:</div>
                            <div className="middle-stats-value">{bestFootSkill == 99999 ? '-' : bestFootSkill.toFixed(2)} c</div>
                            <div className="middle-stats-value">({bestFootSkill_hits == 0 ? '-' : Math.round(bestFootSkill_hits)} {declOfNum(bestFootSkill_hits)})</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/sharpshooting.svg"></img>
                            </div>
                            <div>Точность удара:</div>
                            <div className="middle-stats-value">{bestSharpshooting == 0 ? '-' : Math.round(bestSharpshooting)} %</div>
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
                            <div className="middle-stats-value">{middleHit == 0 ? '-' : Math.round(middleHit)} км/ч</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/jumps.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в высоту:</div>
                            <div className="middle-stats-value">{middleJump == 0 ? '-' : Math.round(middleJump)} см</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/jumps-length.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в длинну:</div>
                            <div className="middle-stats-value">{middleJump2 == 0 ? '-' : Math.round(middleJump2)} см</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Реакция:</div>
                            <div className="middle-stats-value">{middleReaction == 0 ? '-' : Math.round(middleReaction)} мс</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>10 метров с места:</div>
                            <div className="middle-stats-value">{middleSpeed == 0 ? '-' : middleSpeed.toFixed(3)} км/ч</div>
                            <div className="middle-stats-value">{middleSpeed2 == 0 ? '-' : middleSpeed2.toFixed(3)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>10 метров с разбега:</div>
                            <div className="middle-stats-value">{middleSpeed_s_razbegu == 0 ? '-' : middleSpeed_s_razbegu.toFixed(3)} км/ч</div>
                            <div className="middle-stats-value">{middleSpeed_s_razbegu2 == 0 ? '-' : middleSpeed_s_razbegu2.toFixed(3)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Agility test:</div>
                            <div className="middle-stats-value">{middleAgility == 0 ? '-' : middleAgility.toFixed(3)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/footSkill2.svg"></img>
                            </div>
                            <div>FootSkill test:</div>
                            <div className="middle-stats-value">{middleFootSkill == 0 ? "-" : middleFootSkill.toFixed(2)} c</div>
                            <div className="middle-stats-value">({middleFootSkill_hits == 0 ? "-" : Math.round(middleFootSkill_hits)} {declOfNum(middleFootSkill_hits)})</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/sharpshooting.svg"></img>
                            </div>
                            <div>Точность удара:</div>
                            <div className="middle-stats-value">{middleSharpshooting == 0 ? '-' : Math.round(middleSharpshooting)} %</div>
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
                            <div className="middle-stats-value">{hit == 0 ? '-' : Math.round(hit)} км/ч</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/jumps.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в высоту:</div>
                            <div className="middle-stats-value">{jump == 0 ? '-' : Math.round(jump)} см</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/jumps-length.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок в длинну:</div>
                            <div className="middle-stats-value">{jump2 == 0 ? '-' : Math.round(jump2)} см</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Реакция:</div>
                            <div className="middle-stats-value">{reaction == 999999 ? '-' : Math.round(reaction)} мс</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>10 метров с места:</div>
                            <div className="middle-stats-value">{speed == 0 ? '-' : speed.toFixed(3)} км/ч</div>
                            <div className="middle-stats-value">{speed2 == 999999 ? '-' : speed2.toFixed(3)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/speed.svg"></img>
                            </div>
                            <div>10 метров с разбега:</div>
                            <div className="middle-stats-value">{speed_s_razbegu == 0 ? '-' : speed_s_razbegu.toFixed(3)}  км/ч</div>
                            <div className="middle-stats-value">{speed_s_razbegu2 == 9999 ? '-' : speed_s_razbegu2.toFixed(3)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Agility test:</div>
                            <div className="middle-stats-value">{agility == 99999 ? '-' : agility.toFixed(3)} с</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/footSkill2.svg"></img>
                            </div>
                            <div>FootSkill test:</div>
                            <div className="middle-stats-value">{footSkill == 99999 ? '-' : footSkill.toFixed(2)} c</div>
                            <div className="middle-stats-value">({footSkill_hits == 0 ? '-' : Math.round(footSkill_hits)} {declOfNum(footSkill_hits)})</div>
                        </li>
                        <li>
                            <div>
                                <img src="/images/middle-stats/sharpshooting.svg"></img>
                            </div>
                            <div>Точность удара:</div>
                            <div className="middle-stats-value">{sharpshooting == 0 ? '-' : Math.round(sharpshooting)} %</div>
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