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

    const [footballPlayer, setFootballPlayer] = React.useState();
    const [loading, setLoading] = React.useState([])
    const [player, setPlayer] = React.useState([]);

    React.useEffect(() => {
        const fetchStat = async () => {
            setLoading(true)
            const res = await axios.get(`https://cdn.lk-ft.ru/footballers/${it_number}`);
            setFootballPlayer(res.data)
            setLoading(false)
        }

        fetchStat();
    }, []);

    const [name_id, setNameId] = React.useState('');
    const [countTraining, setCountTraining] = React.useState(0);
    const [countCamps, setCountCamps] = React.useState(0);
    const [minusPoints, setMinusPoints] = React.useState(0);

    React.useEffect(() => {
        if (footballPlayer) {
            setNameId(footballPlayer?.lastname + ' ' + footballPlayer?.firstname + ' ' + footballPlayer?.id + ' ');
            setCountCamps(Number(footballPlayer?.count_of_camps));
            setCountTraining(Number(footballPlayer?.count_of_training));
            setMinusPoints(Number(footballPlayer?.count_of_minus_points))
        }
    }, [footballPlayer])


    React.useEffect(() => {
        const fetchStat = async () => {
            const res = await axios.get('https://cdn.lk-ft.ru/players');
            setPlayer(res.data)
        }

        fetchStat();
    }, []);

    var twoVSTwo = [];
    var two = 0, tre = 0, penal = 0, test = 0;
    var threeVsThree = [];
    var penalty = [];
    let testing = [];

    player.map((e, i) => {
        if (e.fullname == name_id) {
            if (e.last_statements == "Панна") {
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
            if (e.last_statements == 'Тестирование')
                testing.push({
                    date: e.age.split('-').reverse().join('.'),
                    zabito: e.phone,
                    propush: e.insta,
                    mark: e.adresse
                })
            test += Number(e.adresse)
        }
    })
    return (
        <>
            <SiteHeader />
            <body style={{ minHeight: "calc(100vh - 100px)" }}>
                <div class="container">
                    <div class="single-tournament-content">
                        {/* <div class="achivements-header">
                            <Training countTraining={countTraining} />
                            <FullInformation />
                        </div>
                        <Camp countCamps={countCamps} />
                        <Events dva={twoVSTwo} tre={threeVsThree} penal={penalty} /> */}
                        <FullGradde two={two} tre={tre} camp={countCamps} test={test} training={countTraining} minusPoints={minusPoints} />
                    </div>
                </div>
            </body>
            <SiteFooter />
        </>
    )
}