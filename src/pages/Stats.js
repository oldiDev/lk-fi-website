import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { useStatistics } from "./components/hooks/useStat";
import './switcher.css'
import TestInfo from "./TestInfo";

export const Stats = ({ stats }) => {
    const { get, set } = useStatistics();
    const [show, setShow] = useState(false);
    const [speedSwitcher, setSpeedSwitcher] = useState(false);
    const [speed_s_razbegaSwitcher, setSpeed_s_razbegaSwitcher] = useState(false);
    const [footSkillSwitcher, setFootSkillSwitcher] = useState(false);
    const [showInfo, setShowInfo] = useState(false);


    const handleChangeSpeed = () => {
        setSpeedSwitcher(!speedSwitcher);
        // console.log(speedSwitcher)
    }
    const handleChangeSpeed_s_razbega = () => {
        setSpeed_s_razbegaSwitcher(!speed_s_razbegaSwitcher);
        // console.log(speedSwitcher)
    }
    const handleChangeFootSkill = () => {
        setFootSkillSwitcher(!footSkillSwitcher)
    }

    let showInfoFunction = () => {
        setShowInfo(!showInfo)
    }

    React.useEffect(() => {
        if (typeof stats == "object" && typeof stats[0] != "number") {
            set(stats);
        }
        return () => { };
    }, [stats]);
    if (show) {
        return (
            <div className="container">
                <section className="section-header-2">
                    <div className="section-flex">
                        <h2 class="title" onClick={() => setShow(false)}>
                            <span class="text-theme-show">Моя статистика</span>
                            <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow arrow-margin-bottom"></img>
                        </h2>
                        <div className="test-info" onClick={showInfoFunction}>Подробнее о тестировании</div>
                    </div>

                    <div className="my-stats-chart">
                        <div>
                            <span className="my-stats-label">Сила удара</span>
                            <Chart
                                className="stats-chart"
                                width={"470px"}
                                height={"357px"}
                                chartType="AreaChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "", id: "Won/Loss" },
                                        { role: "tooltip", type: "string", p: { html: true } },
                                    ],
                                    //   ...get()?.HitList
                                ].concat(get()?.HitList || [])}
                                options={{
                                    series: [{ color: "#25BA00" }],
                                    curveType: "function",
                                    intervals: { color: "#ffffff" },
                                    pointSize: 7,
                                    hAxis: {
                                        format: "dd.MM.yy"
                                    }
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                        <div>
                            <div className="chart-with-switcher">
                                <span className="my-stats-label">10 метров с места {speedSwitcher ? '(км/ч)' : '(сек)'}</span>
                                <label class="switch">
                                    <input type="checkbox" checked={!speedSwitcher} onChange={handleChangeSpeed} />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            {
                                (speedSwitcher) ?
                                    <Chart
                                        className="stats-chart"
                                        width={"470px"}
                                        height={"357px"}
                                        chartType="AreaChart"
                                        data={[
                                            [
                                                { type: "date", label: "Дата", id: "Date" },
                                                { type: "number", label: "", id: "Won/Loss" },
                                                { role: "tooltip", type: "string", p: { html: true } },
                                            ],
                                        ].concat(get()?.SpeedList || [])}
                                        options={{
                                            series: [{ color: "#25BA00" }],
                                            curveType: "function",
                                            pointSize: 7,
                                            hAxis: {
                                                format: "dd.MM.yy"
                                            }
                                        }}
                                        rootProps={{ "data-testid": "2" }}
                                    /> : <Chart
                                        className="stats-chart"
                                        width={"470px"}
                                        height={"357px"}
                                        chartType="AreaChart"
                                        data={[
                                            [
                                                { type: "date", label: "Дата", id: "Date" },
                                                { type: "number", label: "", id: "Won/Loss" },
                                                { role: "tooltip", type: "string", p: { html: true } },
                                            ],
                                        ].concat(get()?.SpeedList2 || [])}
                                        options={{
                                            series: [{ color: "#25BA00" }],
                                            curveType: "function",
                                            pointSize: 7,
                                            hAxis: {
                                                format: "dd.MM.yy"
                                            }
                                        }}
                                        rootProps={{ "data-testid": "2" }}
                                    />
                            }


                        </div>
                        <div>
                            <div className="chart-with-switcher">
                                <span className="my-stats-label">10 метров с разбега {speed_s_razbegaSwitcher ? '(км/ч)' : '(сек)'}</span>
                                <label class="switch">
                                    <input type="checkbox" checked={!speed_s_razbegaSwitcher} onChange={handleChangeSpeed_s_razbega} />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            {
                                speed_s_razbegaSwitcher ?
                                    <Chart
                                        className="stats-chart"
                                        width={"470px"}
                                        height={"357px"}
                                        chartType="AreaChart"
                                        data={[
                                            [
                                                { type: "date", label: "Дата", id: "Date" },
                                                { type: "number", label: "", id: "Won/Loss" },
                                                { role: "tooltip", type: "string", p: { html: true } },
                                            ],
                                        ].concat(get()?.SpeedList_s_razbegu || [])}
                                        options={{
                                            series: [{ color: "#25BA00" }],
                                            curveType: "function",
                                            pointSize: 7,
                                            hAxis: {
                                                format: "dd.MM.yy"
                                            }
                                        }}
                                        rootProps={{ "data-testid": "2" }}
                                    /> :
                                    <Chart
                                        className="stats-chart"
                                        width={"470px"}
                                        height={"357px"}
                                        chartType="AreaChart"
                                        data={[
                                            [
                                                { type: "date", label: "Дата", id: "Date" },
                                                { type: "number", label: "", id: "Won/Loss" },
                                                { role: "tooltip", type: "string", p: { html: true } },
                                            ],
                                        ].concat(get()?.SpeedList_s_razbegu2 || [])}
                                        options={{
                                            series: [{ color: "#25BA00" }],
                                            curveType: "function",
                                            pointSize: 7,
                                            hAxis: {
                                                format: "dd.MM.yy"
                                            }
                                        }}
                                        rootProps={{ "data-testid": "2" }}
                                    />
                            }

                        </div>
                        <div>
                            <span className="my-stats-label">Прыжок в высоту</span>
                            <Chart
                                className="stats-chart"
                                width={"470px"}
                                height={"357px"}
                                chartType="AreaChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "", id: "Won/Loss" },
                                        { role: "tooltip", type: "string", p: { html: true } },
                                    ],
                                ].concat(get()?.JumpList || [])}
                                options={{
                                    series: [{ color: "#25BA00" }],
                                    curveType: "function",
                                    pointSize: 7,
                                    hAxis: {
                                        format: "dd.MM.yy"
                                    }
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                        <div>
                            <span className="my-stats-label">Прыжок в длинну</span>
                            <Chart
                                className="stats-chart"
                                width={"470px"}
                                height={"357px"}
                                chartType="AreaChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "", id: "Won/Loss" },
                                        { role: "tooltip", type: "string", p: { html: true } },
                                    ],
                                ].concat(get()?.JumpList2 || [])}
                                options={{
                                    series: [{ color: "#25BA00" }],
                                    curveType: "function",
                                    pointSize: 7,
                                    hAxis: {
                                        format: "dd.MM.yy"
                                    }
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                        <div>
                            <span className="my-stats-label">Скорость реакции</span>
                            <Chart
                                className="stats-chart"
                                width={"470px"}
                                height={"357px"}
                                chartType="AreaChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "", id: "Won/Loss" },
                                        { role: "tooltip", type: "string", p: { html: true } },
                                    ],
                                ].concat(get()?.ReactionList || [])}
                                options={{
                                    series: [{ color: "#25BA00" }],
                                    curveType: "function",
                                    pointSize: 7,
                                    hAxis: {
                                        format: "dd.MM.yy"
                                    }
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                        <div>
                            <span className="my-stats-label">Agility Test</span>
                            <Chart
                                className="stats-chart"
                                width={"470px"}
                                height={"357px"}
                                chartType="AreaChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "", id: "Won/Loss" },
                                        { role: "tooltip", type: "string", p: { html: true } },
                                    ],
                                ].concat(get()?.AgilityList || [])}
                                options={{
                                    series: [{ color: "#25BA00" }],
                                    curveType: "function",
                                    pointSize: 7,
                                    hAxis: {
                                        format: "dd.MM.yy"
                                    }
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                        <div>
                            <div className="chart-with-switcher">
                                <span className="my-stats-label">FootSkill Test {footSkillSwitcher ? "(сек)" : '(удары)'}</span>
                                <label class="switch">
                                    <input type="checkbox" checked={!footSkillSwitcher} onChange={handleChangeFootSkill} />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            {
                                footSkillSwitcher ?
                                    <Chart
                                        className="stats-chart"
                                        width={"470px"}
                                        height={"357px"}
                                        chartType="AreaChart"
                                        data={[
                                            [
                                                { type: "date", label: "Дата", id: "Date" },
                                                { type: "number", label: "", id: "Won/Loss" },
                                                { role: "tooltip", type: "string", p: { html: true } },
                                            ],
                                        ].concat(get()?.FootSkillList || [])}
                                        options={{
                                            series: [{ color: "#25BA00" }],
                                            curveType: "function",
                                            pointSize: 7,
                                            hAxis: {
                                                format: "dd.MM.yy"
                                            }
                                        }}
                                        rootProps={{ "data-testid": "2" }}
                                    /> :
                                    <Chart
                                        className="stats-chart"
                                        width={"470px"}
                                        height={"357px"}
                                        chartType="AreaChart"
                                        data={[
                                            [
                                                { type: "date", label: "Дата", id: "Date" },
                                                { type: "number", label: "", id: "Won/Loss" },
                                                { role: "tooltip", type: "string", p: { html: true } },
                                            ],
                                        ].concat(get()?.FootSkillList_hits || [])}
                                        options={{
                                            series: [{ color: "#25BA00" }],
                                            curveType: "function",
                                            pointSize: 7,
                                            hAxis: {
                                                format: "dd.MM.yy"
                                            }
                                        }}
                                        rootProps={{ "data-testid": "2" }}
                                    />
                            }

                        </div>
                        <div>
                            <span class="my-stats-label">Точность</span>
                            <Chart
                                className="stats-chart"
                                width={"470px"}
                                height={"357px"}
                                chartType="AreaChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "", id: "Won/Loss" },
                                        { role: "tooltip", type: "string", p: { html: true } },
                                    ],
                                ].concat(get()?.SharpshootingList || [])}
                                options={{
                                    series: [{ color: "#25BA00" }],
                                    curveType: "function",
                                    pointSize: 7,
                                    hAxis: {
                                        format: "dd.MM.yy"
                                    }
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                    </div>
                </section>
                {
                    showInfo ? <TestInfo togglePopUp={showInfoFunction} /> : null
                }
            </div>
        );
    } else {
        return (
            <div className="container">
                <section className="section-header-2 section-flex">
                    <h2 class="title" onClick={() => setShow(true)} style={{ cursor: "pointer" }}>
                        <span class="text-theme">Моя статистика</span>
                        <img src="/images/client/right-arrow.svg" alt="right-arrow" className="client-menu-arrow arrow-margin-bottom " ></img>
                    </h2>
                    <div className="test-info" onClick={showInfoFunction}>Подробнее о тестировании</div>
                </section>
                {
                    showInfo ? <TestInfo togglePopUp={showInfoFunction} /> : null
                }
            </div>
        );
    }
};
