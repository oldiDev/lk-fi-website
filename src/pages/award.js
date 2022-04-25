import React, { useState } from "react";
import axios from "axios";
import { Camp } from "./components/AchivmentsCpm/Camp";
import { Events } from "./components/AchivmentsCpm/Events";
import { FullGradde } from "./components/AchivmentsCpm/FullGrade";
import { Training } from "./components/AchivmentsCpm/Training";
import { SiteFooter } from "./components/footer";
import { SiteHeader } from "./components/header";
import { FullInformation } from "./components/AchivmentsCpm/FullInformation";
import { useParams } from "react-router";


export const Award = () => {

    const params = useParams()
    const it_number = params.id;

    const [footballPlayer, setFootballPlayer] = React.useState([]);
    const [loading, setLoading] = React.useState([])
    const [player, setPlayer] = React.useState([]);

    React.useEffect(() => {
        const fetchStat = async () => {
            setLoading(true)
            const res = await axios.get('https://cdn.lk-ft.ru/footballers');
            setFootballPlayer(res.data)
            setLoading(false)
        }

        fetchStat();
    }, []);

    let name_id;
    let countTraining;
    let countCamps;
    let minusPoints;
    footballPlayer.map((e, i) => {
        if (e.id == it_number) {
            name_id = e.lastname + ' ' + e.firstname + ' ' + e.id + ' ';
            countCamps = Number(e.count_of_camps);
            countTraining = Number(e.count_of_training);
            minusPoints = Number(e.count_of_minus_points)
        }
    })

    React.useEffect(() => {
        const fetchStat = async () => {
            const res = await axios.get('https://cdn.lk-ft.ru/players');
            setPlayer(res.data)
        }

        fetchStat();
    }, []);

    var twoVSTwo = [];
    var two = 0, tre = 0, penal = 0;
    var threeVsThree = [];
    var penalty = [];

    player.map((e, i) => {
        if (e.fullname == name_id) {
            if (e.last_statements == "2 VS 2") {
                twoVSTwo.push({
                    date: e.age.split('-').reverse().join('.'),
                    zabito: e.phone,
                    propush: e.insta,
                    mark: e.adresse
                })
                two += Number(e.adresse);
            }
            if (e.last_statements == '3 VS 3') {
                threeVsThree.push({
                    date: e.age.split('-').reverse().join('.'),
                    zabito: e.phone,
                    propush: e.insta,
                    mark: e.adresse
                })
                tre += Number(e.adresse)
            }
            if (e.last_statements == "Пенальти") {
                penalty.push({
                    date: e.age.split('-').reverse().join('.'),
                    zabito: e.phone,
                    propush: e.insta,
                    mark: e.adresse
                })
                penal += Number(e.adresse)
            }
        }
    })
    return (
        <>
            <SiteHeader />
            <body>
                <div class="container">
                    <div class="single-tournament-content">
                        {/* <div class="achivements-header">
                            <Training countTraining={countTraining} />
                            <FullInformation />
                        </div>
                        <Camp countCamps={countCamps} />
                        <Events dva={twoVSTwo} tre={threeVsThree} penal={penalty} /> */}
                        <FullGradde two={two} tre={tre} camp={countCamps} training={countTraining} minusPoints={minusPoints} />
                        <div className="before-footer"></div>
                    </div>
                </div>
                <div class="before-footer"></div>
            </body>
            <SiteFooter />
        </>
    )
}