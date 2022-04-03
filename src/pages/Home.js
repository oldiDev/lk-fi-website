import  React from "react";
import { useParams } from "react-router";

import { BannerPlayer } from "./components/bannerPlayer";
import { SiteHeader } from "./components/header";
import { SiteFooter } from "./components/footer";
import { SectionBlog } from "./components/sectionBlog";
import { Stats } from "./Stats";
import axios from "axios";
import { SelectionShedule } from "./components/shedule";
import { MiddleStats } from "./MidleStats";
import { Tournament } from "./Tournament";




export const Home = () => {

  const params = useParams()
  const it_number = params.id;

  const [player, setPlayer] = React.useState([]);
  const [loading,setLoading] = React.useState([]) 
  React.useEffect(() => {
     // fetchDataPlayer();

      const fetchStat = async () =>{
        setLoading(true);
        const res = await axios.get('https://cdn.lk-ft.ru/footballers');
        setPlayer(res.data)
        setLoading(false);
      }

      fetchStat();
  }, []);

  var firstname,lastname,position, avatar, birthday,lead_leg,team ;
  
  var star= [];
  var name_id;

  player.map((e,i) => {if(e.id == it_number){name_id =e.lastname+' '+e.firstname+' '+e.id+' ' ;firstname=e.firstname ; lastname = e.lastname ; position = e.playerPosition ; avatar=e.avatar?.url; star = e.Statistics ;birthday=e.birthday;lead_leg = e.lead_leg;team=e.team ;console.log(e) }})

  if(avatar!=null){
    avatar= "https://cdn.lk-ft.ru"+avatar;
  }else{
    avatar="/images/banner/head.png";
  }
  

    return(
      <>
      
      <SiteHeader />
          <body>
             
            <BannerPlayer firstname={firstname} lastname={lastname} position={position} avatar={avatar} birthday={birthday} lead_leg={lead_leg} team={team}/>
           {/*  <SectionAbout /> 
            <SectionHistory />  */}
            <Tournament name_id={name_id} />
            <Stats stats={star}/> 
            <MiddleStats stats={star} />
             <SelectionShedule />
             <SectionBlog />
             <SiteFooter /> 
    </body>
    </>
    )
}





