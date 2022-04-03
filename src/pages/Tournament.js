import React,{useState,useEffect} from "react";
import { Camp } from "./components/AchivmentsCpm/Camp";
import { FullGradde } from "./components/AchivmentsCpm/FullGrade";
import { Training } from "./components/AchivmentsCpm/Training";
import { Events } from "./components/AchivmentsCpm/Events";
import { FullInformation } from "./components/AchivmentsCpm/FullInformation";
import './components/AchivmentsCpm/information.css'
import axios from "axios";

export const Tournament = ({name_id}) =>{
    

    const [player, setPlayer] = React.useState([]);
    React.useEffect(() => {
        const fetchStat = async () =>{
          const res = await axios.get('https://cdn.lk-ft.ru/players');
          setPlayer(res.data)
        }
  
        fetchStat();
    }, []);
    
    var twoVSTwo = [];
    var two = 0,tre = 0,penal = 0;
    var threeVsThree = [];
    var penalty = [];

    player.map((e,i) => {if(e.fullname == name_id){
       if(e.last_statements == "2 VS 2"){
            twoVSTwo.push({date:e.age,zabito:e.phone,propush:e.insta,mark:e.adresse})
            two+=Number(e.adresse);
       }
       if(e.last_statements == '3 VS 3'){
            threeVsThree.push({date:e.age,zabito:e.phone,propush:e.insta,mark:e.adresse})
            tre+=Number(e.adresse)
       }
       if(e.last_statements == "Пенальти"){
            penalty.push({date:e.age,zabito:e.phone,propush:e.insta,mark:e.adresse})
            penal+=Number(e.adresse)
       }
    }})

    const [show,setShow] = useState(false);
    if(!show){
        return(
            <section>
                <div class="container">
               
                    <h1 class="title" style={{cursor:'pointer'}} onClick={()=>setShow(true)}>Достижения</h1>
               
                </div>
            </section>
        )
    }else{
        return(
            <section>
                <div  class="container">
                <div class="container">
               
                    <h1  class="title" style={{cursor:'pointer'}} onClick={()=>setShow(false)}>Достижения</h1>
                    <div class="container">
                    <div>
                           <Training/>
                    </div>
                    <div>
                           <Camp/>
                    </div>
                    <div>
                           <Events dva={twoVSTwo} tre={threeVsThree} penal={penalty}/>
                    </div>
                    <div>
                           <FullGradde two={two} tre={tre} penal={penal}/>
                    </div>
                    <div>
                           <FullInformation/>
                    </div>
                    </div>
                
                </div>
                </div>
            </section>
        )

    }
    
}