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
                            <span className="my-stats-label">Удар</span>
                            <Chart
                                className="stats-chart"
                                width={"470px"}
                                height={"357px"}
                                chartType="LineChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "", id: "Won/Loss" },
                                    ],
                                    //   ...get()?.HitList
                                ].concat(get()?.HitList || [])}
                                options={{
                                    series: [{ color: "#25BA00" }],
                                    curveType: "function",
                                    intervals: { color: "#ffffff" },
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                        <div>
                            <span className="my-stats-label">Скорость</span>
                            <Chart
                                className="stats-chart"
                                width={"470px"}
                                height={"357px"}
                                chartType="LineChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "", id: "Won/Loss" },
                                    ],
                                ].concat(get()?.SpeedList || [])}
                                options={{
                                    series: [{ color: "#25BA00" }],
                                    curveType: "function",
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                        <div>
                            <span className="my-stats-label">Прыжок</span>
                            <Chart
                                className="stats-chart"
                                width={"470px"}
                                height={"357px"}
                                chartType="LineChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "", id: "Won/Loss" },
                                    ],
                                ].concat(get()?.JumpList || [])}
                                options={{
                                    series: [{ color: "#25BA00" }],
                                    curveType: "function",
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                        <div>
                            <span className="my-stats-label">Реакция</span>
                            <Chart
                                className="stats-chart"
                                width={"470px"}
                                height={"357px"}
                                chartType="LineChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "", id: "Won/Loss" },
                                    ],
                                ].concat(get()?.ReactionList || [])}
                                options={{
                                    series: [{ color: "#25BA00" }],
                                    curveType: "function",
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
