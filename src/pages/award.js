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

    footballPlayer.map((e, i) => {
        if (e.id == it_number) {
            name_id = e.lastname + ' ' + e.firstname + ' ' + e.id + ' '
        }
    })

    React.useEffect(() => {
        const fetchStat = async () => {
            const res = await axios.get('https://cdn.lk-ft.ru/players');
            setPlayer(res.data)
        }

        fetchStat();
    }, []);

    console.log(player)

    var twoVSTwo = [];
    var two = 0, tre = 0, penal = 0;
    var threeVsThree = [];
    var penalty = [];

    player.map((e, i) => {
        if (e.fullname == name_id) {
            if (e.last_statements == "2 VS 2") {
                twoVSTwo.push({
                    date: e.age,
                    zabito: e.phone,
                    propush: e.insta,
                    mark: e.adresse
                })
                two += Number(e.adresse);
            }
            if (e.last_statements == '3 VS 3') {
                threeVsThree.push({
                    date: e.age,
                    zabito: e.phone,
                    propush: e.insta,
                    mark: e.adresse
                })
                tre += Number(e.adresse)
            }
            if (e.last_statements == "Пенальти") {
                penalty.push({
                    date: e.age,
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
                        <div class="achivements-header">
                            <Training />
                            <FullInformation />
                        </div>
                        <Camp />
                        <Events dva={twoVSTwo} tre={threeVsThree} penal={penalty} />
                        <FullGradde two={two} tre={tre} penal={penal} />
                    </div>
                </div>
                <div class="before-footer"></div>
            </body>
            <SiteFooter />
        </>
    )
}