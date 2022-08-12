import React from "react";
import { useParams } from "react-router";

import { BannerPlayer } from "./components/bannerPlayer";
import { SiteHeader } from "./components/header";
import { SiteFooter } from "./components/footer";
import { Stats } from "./Stats";
import axios from "axios";
import { MiddleStats } from "./MidleStats";




export const Home = () => {

    const params = useParams()
    const it_number = params.id;

    const [player, setPlayer] = React.useState([]);
    const [loading, setLoading] = React.useState([])
    React.useEffect(() => {
        // fetchDataPlayer();

        const fetchStat = async () => {
            setLoading(true);
            const res = await axios.get(`https://cdn.lk-ft.ru/footballers`);
            setPlayer(res.data)
            setLoading(false);
        }

        fetchStat();
    }, []);

    var firstname, lastname, position, avatar, birthday, lead_leg, team;

    var star = [];
    var name_id;

    // console.log(player);

    player.map((e, i) => {
        if (e.id == it_number) {
            name_id = e.lastname + ' ' + e.firstname + ' ' + e.id + ' ';
            firstname = e.firstname;
            lastname = e.lastname;
            position = e.playerPosition;
            avatar = e.avatar?.url;
            star = e.Statistics;
            birthday = e.birthday.split('-').reverse().join('.');
            lead_leg = e.lead_leg;
            team = e.team;
        }
    })

    star?.sort(function (a, b) {
        if (a.date > b.date) {
            return 1;
        }
        if (a.date < b.date) {
            return -1;
        }
        return 0;
    });



    star?.sort(function (a, b) {
        if (a.date > b.date) {
            return 1;
        }
        if (a.date < b.date) {
            return -1;
        }
        return 0;
    });

    avatar = (avatar != null) ? "https://cdn.lk-ft.ru" + avatar : "/images/banner/banner.png";
    // console.log(star);

    return (
        <>

            <SiteHeader />
            <body style={{minHeight: "calc(100vh - 100px)"}}>
                <BannerPlayer
                    firstname={firstname}
                    lastname={lastname}
                    position={position}
                    avatar={avatar}
                    birthday={birthday}
                    lead_leg={lead_leg}
                    team={team}
                />
                <div className="container">
                    <div className="long-green-line"></div>
                </div>
                <Stats stats={star} />
                <div className="container">
                    <div className="long-green-line"></div>
                </div>
                <MiddleStats selfBest={star} playerArray={player} />
                <div className="container">
                    <div className="long-green-line"></div>
                </div>
            </body>
            <SiteFooter />
        </>
    )
}





