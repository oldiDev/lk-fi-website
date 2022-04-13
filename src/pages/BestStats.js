import React from "react";
import axios from "axios";

export const BestStats = ({ stats, show, year, playerArray }) => {
    const [player, setPlayer] = React.useState([]);
    const [loading, setLoading] = React.useState([])

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

    let middleHit = 0;
    let middleJump = 0;
    let middleReaction = 0;
    let middleSpeed = 0;
    let middleSharpshooting = 0;

    const result = playerArray.filter(e => e.birthday.split('-')[0] == year)
    result.map(e => {
        e.Statistics.map(f => {
            middleHit += Number(f.Hit);
            middleJump += Number(f.Jump);
            middleReaction += Number(f.Reaction);
            middleSpeed += Number(f.Speed);
            middleSharpshooting += Number(f.sharpshooting);
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


    var hit = 0;
    var jump = 0;
    var reaction = 0;
    var speed = 0;
    let sharpshooting = 0;

    stats.map((e, i) => {
        hit = (Number(hit) > Number(e.Hit)) ? Number(hit) : Number(e.Hit);
        jump = (Number(jump) > Number(e.Jump)) ? Number(jump) : Number(e.Jump);
        reaction = (Number(reaction) > Number(e.Reaction)) ? Number(reaction) : Number(e.Reaction);
        speed = (Number(speed) > Number(e.Speed)) ? Number(speed) : Number(e.Speed);
        sharpshooting = (Number(sharpshooting) > Number(e.sharpshooting)) ? Number(sharpshooting) : Number(e.sharpshooting);
    });

    if (sharpshooting != 0) {
        sharpshooting = (sharpshooting > 100) ? Math.round(sharpshooting - 100) : Math.round(sharpshooting);
    }

    if (show) {
        return (
            <div>
                <div class="middle-stats-label">
                    Средний результат среди всех спортсменов
                </div>
                <ul>
                    <li>
                        <div>
                            <img src="/images/middle-stats/barbell.svg" alt='barbel' style={{ color: "#008CDB" }}></img>
                        </div>
                        <div>Удар:</div>
                        <div className="middle-stats-value">{Math.round(middleHit)}</div>
                    </li>
                    <li>
                        <div>
                            <img src="/images/middle-stats/jumps.svg" alt="jumps"></img>
                        </div>
                        <div>Прыжок:</div>
                        <div className="middle-stats-value">{Math.round(middleJump)}</div>
                    </li>
                    <li>
                        <div>
                            <img src="/images/middle-stats/watch.svg" alt="time"></img>
                        </div>
                        <div>Реакция:</div>
                        <div className="middle-stats-value">{Math.round(middleReaction)}</div>
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
                        <div>Удар:</div>
                        <div className="middle-stats-value">{Math.round(hit)}</div>
                    </li>
                    <li>
                        <div>
                            <img src="/images/middle-stats/jumps.svg" alt="jumps"></img>
                        </div>
                        <div>Прыжок:</div>
                        <div className="middle-stats-value">{Math.round(jump)}</div>
                    </li>
                    <li>
                        <div>
                            <img src="/images/middle-stats/watch.svg" alt="time"></img>
                        </div>
                        <div>Реакция:</div>
                        <div className="middle-stats-value">{Math.round(reaction)}</div>
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
        );
    } else {
        return (
            <></>
        )
    }
}