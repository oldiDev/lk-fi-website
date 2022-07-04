import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { useStatistics } from "./components/hooks/useStat";

export const Stats = ({ stats }) => {
    const { get, set } = useStatistics();
    const [show, setShow] = useState(false);

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
                    <h2 class="title" onClick={() => setShow(false)}>
                        <span class="text-theme-show">Моя статистика</span>
                        <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                    </h2>
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
                            <span className="my-stats-label">10 метров с места (км/ч)</span>
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
                            />
                        </div>
                        <div>
                            <span className="my-stats-label">10 метров с места (сек)</span>
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
                        </div>
                        <div>
                            <span className="my-stats-label">10 метров с разбега (км/ч)</span>
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
                            />
                        </div>
                        <div>
                            <span className="my-stats-label">10 метров с разбега (сек)</span>
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
                            <span className="my-stats-label">FootSkill Test (сек)</span>
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
                            />
                        </div>
                        <div>
                            <span className="my-stats-label">FootSkill Test (удары)</span>
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
            </div>
        );
    } else {
        return (
            <div className="container">
                <section className="section-header-2">
                    <h2 class="title" onClick={() => setShow(true)} style={{ cursor: "pointer" }}>
                        <span class="text-theme">Моя статистика</span>
                        <img src="/images/client/right-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                    </h2>
                </section>
            </div>
        );
    }
};
