import React, { useState, useEffect } from "react";
import { Camp } from "./components/AchivmentsCpm/Camp";
import { FullGradde } from "./components/AchivmentsCpm/FullGrade";
import { Training } from "./components/AchivmentsCpm/Training";
import { Events } from "./components/AchivmentsCpm/Events";
import { FullInformation } from "./components/AchivmentsCpm/FullInformation";
import './components/AchivmentsCpm/information.css'
import axios from "axios";

export const Tournament = ({ name_id }) => {


    const [player, setPlayer] = React.useState([]);
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

    console.log(player)

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


    const [show, setShow] = useState(false);
    if (!show) {
        return (
            <section>
                <div class="container">
                    <section className="section-header-2">
                        <div class="text-theme" onClick={() => setShow(true)}>
                            <span>Достижения</span>
                            <img src="/images/client/right-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                        </div>
                    </section>
                </div>
            </section>
        )
    } else if (show) {
        return (
            <section>
                <div class="container">
                    <section className="section-header-2">
                        <div сlass="achivements-header">
                            <div class="text-theme-show" onClick={() => setShow(false)}>
                                <span>Достижения</span>
                                <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                            </div>
                            <FullInformation />
                        </div>
                        <div class="tournament-content">
                            <Training />
                            <Camp />
                            <Events dva={twoVSTwo} tre={threeVsThree} penal={penalty} />
                            <FullGradde two={two} tre={tre} penal={penal} training={training} />
                        </div>
                    </section>
                </div>
            </section>
        )

    }

}