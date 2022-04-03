import axios from "axios";
import React, { useState } from "react"
import { useParams } from "react-router";
/* 
import {observer} from "mobx-react-lite";
 */


export const SelectionShedule = () =>{
      const [show, setShow] = useState(false);
      const params = useParams();
      const it_number = params.id;

      const [shedule, setShedule] = React.useState([]);
      const [loading,setLoading] = React.useState([]) 
      React.useEffect(() => {  
          const fetchStat = async () =>{
            setLoading(true);
            const res = await axios.get('https://cdn.lk-ft.ru/scheduleas');
            setShedule(res.data)
            setLoading(false);
          }
    
          fetchStat();
      }, []);

 

      if(show){
        return(
        
            <section class="history-section  " id="history">
     <div class="container">
         <div  class="section-header-2" style={{marginBottom: "-20px"}}>
         <div class="container">
             <h2 class="title" onClick={() => setShow(false)} style={{cursor: 'pointer', padding:'0!important'}}>
                 <span class="text-theme">Расписание Занятий</span>
             </h2>
         </div>
         <div class="history-wrapper" style={{display: "flex" }}>
        {shedule.map((e,i) => <>
            
             <div class="history-item-2">
                 <div class="history-content">
                     <h3 class="title">{e.name}</h3>
                     <ul class="common-list">
                         <li>
                             Понедельник: {e.MondayStart}
                         </li>
                         <li>
                             Вторник: {e.ThursdayStart}
                         </li>
                         <li>
                             Среда: {e.WednesdayStart}
                         </li>
                         <li>
                             Четверг: {e.ThursdayStart}
                         </li>
                         <li>
                             Пятница: {e.FridayStart}
                         </li>
                         <li>
                             Суббота: {e.SaturdayStart}
                         </li>
                         <li>
                             Воскресенье: {e.SundayStart}
                         </li>
                     </ul>
                 </div>
             </div>
         
        </>)}</div>
        </div>
     </div>
 </section>
        )
      }else{
          
       return(
        <section class="history-section" id="history">
        <div class="container">
            <div  class="section-header-2" style={{marginBottom: "-20px"}}>
                <h2 class="title" onClick={() => setShow(true)} style={{cursor: 'pointer', padding:'0'}}>
                    <span class="text-theme">Расписание Занятий</span>
                </h2>
            </div>
        </div>
        </section>
       )
      }
    
}     

