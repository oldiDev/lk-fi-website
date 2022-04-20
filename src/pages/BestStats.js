import React from "react";

export const BestStats = ({ show, year, playerArray, selfBest }) => {

    let middleHit = 0;
    let middleJump = 0;
    let middleReaction = 0;
    let middleSpeed = 0;
    let middleSharpshooting = 0;

    var hit = 0;
    var jump = 0;
    var reaction = 999999;
    var speed = 0;
    let sharpshooting = 0;

    const result = playerArray.filter(e => e.birthday.split('-')[0] == year)
    result.map(e => {
        e.Statistics.map(f => {
            middleHit += Number(f.Hit);
            middleJump += Number(f.Jump);
            middleReaction += Number(f.Reaction);
            middleSpeed += Number(f.Speed);
            middleSharpshooting += Number(f.sharpshooting);
            hit = (Number(hit) > Number(f.Hit)) ? Number(hit) : Number(f.Hit);
            jump = (Number(jump) > Number(f.Jump)) ? Number(jump) : Number(f.Jump);
            reaction = (Number(reaction) < Number(f.Reaction)) ? Number(reaction) : Number(f.Reaction);
            speed = (Number(speed) > Number(f.Speed)) ? Number(speed) : Number(f.Speed);
            sharpshooting = (Number(sharpshooting) > Number(f.sharpshooting)) ? Number(sharpshooting) : Number(f.sharpshooting);
        })
        if (e.Statistics.length != 0) {
            middleHit = middleHit / e.Statistics.length;
            middleJump = middleJump / e.Statistics.length;
            middleReaction = middleReaction / e.Statistics.length;
            middleSpeed = middleSpeed / e.Statistics.length;
            middleSharpshooting = middleSharpshooting / e.Statistics.length;
        }
    })
    if (result.length != 0) {
        middleHit = middleHit / result.length;
        middleJump = middleJump / result.length;
        middleReaction = middleReaction / result.length;
        middleSpeed = middleSpeed / result.length;
        middleSharpshooting = middleSharpshooting / result.length;
    }

    let bestHit = 0;
    let bestJump = 0;
    let bestReaction = 999999;
    let bestSpeed = 0;
    let bestSharpshooting = 0;

    selfBest.map(e => {
        bestHit = (bestHit > Number(e.Hit)) ? bestHit : Number(e.Hit);
        bestJump = (bestJump > Number(e.Jump)) ? bestJump : Number(e.Jump);
        bestReaction = (bestReaction < Number(e.Reaction)) ? bestReaction : Number(e.Reaction);
        bestSpeed = (bestSpeed > Number(e.Speed)) ? bestSpeed : Number(e.Speed);
        bestSharpshooting = (bestSharpshooting > Number(e.sharpshooting)) ? bestSharpshooting : Number(e.sharpshooting);
    })


    if (sharpshooting != 0) {
        sharpshooting = (sharpshooting > 100) ? Math.round(sharpshooting - 100) : Math.round(sharpshooting);
    }

    if (show) {
        return (
            <div>
                <table class="best-stat-table">
                    <thead>
                        <th></th>
                        <th scope="col">
                            <div>
                                <img src="/images/middle-stats/barbell.svg" alt='barbel' style={{ color: "#008CDB" }}></img>
                            </div>
                            <div>Сила удара</div>
                        </th>
                        <th scope="col">
                            <div>
                                <img src="/images/middle-stats/jumps.svg" alt="jumps"></img>
                            </div>
                            <div>Прыжок</div>
                        </th>
                        <th scope="col">
                            <div>
                                <img src="/images/middle-stats/watch.svg" alt="time"></img>
                            </div>
                            <div>Реакция</div>
                        </th>
                        <th scope="col">
                            <div>
                                <img src="/images/middle-stats/speed.svg" alt="speed"></img>
                            </div>
                            <div>Скорость</div>
                        </th>
                        <th scope="col" id="last-th">
                            <div>
                                <img src="/images/middle-stats/sharpshooting.svg" alt="sharpshooting"></img>
                            </div>
                            <div>Точность удара</div>
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">Мой лучший рез-т</td>
                            <td>{Math.round(bestHit)} км/ч</td>
                            <td>{Math.round(bestJump)} см</td>
                            <td>{Math.round(bestReaction)} мс</td>
                            <td>{Math.round(bestSpeed)} км/ч</td>
                            <td className="last-cell">{Math.round(bestSharpshooting)} %</td>
                        </tr>
                        <tr>
                            <td scope="row">Средний по возрасту</td>
                            <td>{Math.round(middleHit)} км/ч</td>
                            <td>{Math.round(middleJump)} см</td>
                            <td>{Math.round(middleReaction)} мс</td>
                            <td>{Math.round(middleSpeed)} км/ч</td>
                            <td className="last-cell">{Math.round(middleSharpshooting)} %</td>
                        </tr>
                        <tr>
                            <td scope="row" className="last-row">Лучший рез-т</td>
                            <td className="last-row">{Math.round(hit)} км/ч</td>
                            <td className="last-row">{Math.round(jump)} см</td>
                            <td className="last-row">{Math.round(reaction)} мс</td>
                            <td className="last-row">{Math.round(speed)} км/ч</td>
                            <td className="last-row last-cell">{Math.round(sharpshooting)} %</td>
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
                            <div>Прыжок:</div>
                            <div className="middle-stats-value">{Math.round(bestJump)} см</div>
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
                            <div>Скорость:</div>
                            <div className="middle-stats-value">{Math.round(bestSpeed)} км/ч</div>
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
                            <div>Прыжок:</div>
                            <div className="middle-stats-value">{Math.round(middleJump)} см</div>
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
                            <div>Скорость:</div>
                            <div className="middle-stats-value">{Math.round(middleSpeed)} км/ч</div>
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
                            <div>Прыжок:</div>
                            <div className="middle-stats-value">{Math.round(jump)} см</div>
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
                            <div>Скорость:</div>
                            <div className="middle-stats-value">{Math.round(speed)} км/ч</div>
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