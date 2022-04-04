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
                <section className="section-header-2" style={{ marginBottom: "-20px" }}>
                    <ul>
                        <div class="container ">
                            <h2 class="title" onClick={() => setShow(false)}>
                                <a name="myhistory" href="#0">
                                    <div class="stroke-text">Статистика</div>
                                </a>
                                <span class="text-theme">Моя статистика</span>
                            </h2>
                        </div>
                    </ul>
                    <ul className="stats-"
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <div className="title-chart">
                            <span
                                class="text-theme"
                                style={{
                                    position: "absolute",
                                    marginTop: "-4px",
                                    color: "#25BA00",
                                    marginLeft: "64px",
                                }}
                            >
                                Удар
                            </span>
                            <Chart
                                className="mt-4"
                                width={"500px"}
                                height={"350px"}
                                chartType="LineChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "Удар", id: "Won/Loss" },
                                    ],
                                    //   ...get()?.ReactionList
                                ].concat(get()?.HitList || [])}
                                options={{
                                    chart: {
                                        subtitle: "Оценка",
                                    },
                                    intervals: { color: "#ffffff" },
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                        <div className="title-chart">
                            <span
                                class="text-theme"
                                style={{
                                    position: "absolute",
                                    marginTop: "-4px",
                                    color: "#25BA00",
                                    marginLeft: "64px",
                                }}
                            >
                                Скорость
                            </span>
                            <Chart
                                className="mt-4"
                                width={"500px"}
                                height={"350px"}
                                chartType="LineChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "Скорость", id: "Won/Loss" },
                                    ],
                                    //   ...get()?.ReactionList
                                ].concat(get()?.SpeedList || [])}
                                options={{
                                    chart: {
                                        subtitle: "Оценка",
                                        chartArea: { width: "50%" },
                                        colors: ["#ffab91"],
                                    },
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                        <div className="title-chart">
                            <span
                                class="text-theme"
                                style={{
                                    position: "absolute",
                                    marginTop: "-4px",
                                    color: "#25BA00",
                                    marginLeft: "64px",
                                }}
                            >
                                Прыжок
                            </span>
                            <Chart
                                className="mt-4"
                                width={"500px"}
                                height={"350px"}
                                chartType="LineChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "Прыжок", id: "Won/Loss" },
                                    ],
                                    //   ...get()?.ReactionList
                                ].concat(get()?.JumpList || [])}
                                options={{
                                    chart: {
                                        subtitle: "Оценка",
                                        chartArea: { width: "50%" },
                                    },
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                        <div className="title-chart">
                            <span
                                class="text-theme"
                                style={{
                                    position: "absolute",
                                    marginTop: "-4px",
                                    color: "#25BA00",
                                    marginLeft: "64px",
                                }}
                            >
                                Реакция
                            </span>
                            <Chart
                                className="mt-4"
                                width={"500px"}
                                height={"350px"}
                                chartType="LineChart"
                                data={[
                                    [
                                        { type: "date", label: "Дата", id: "Date" },
                                        { type: "number", label: "Реакция", id: "Won/Loss" },
                                    ],
                                    //   ...get()?.ReactionList
                                ].concat(get()?.ReactionList || [])}
                                options={{
                                    chart: {
                                        subtitle: "Оценка",
                                        chartArea: { width: "50%" },
                                    },
                                }}
                                rootProps={{ "data-testid": "2" }}
                            />
                        </div>
                    </ul>
                </section>
            </div>
        );
    } else {
        return (
            <div className="container">
                <section className="section-header-2" style={{ marginBottom: "-20px" }}>
                    <h2 class="title" onClick={() => setShow(true)}>
                        <a name="myhistory" href="#0">
                            <div class="stroke-text">Статистика</div>
                        </a>
                        <span class="text-theme">Моя статистика</span>
                    </h2>
                </section>
            </div>
        );
    }
};
