import React,{useState} from "react";

export const Events = ({dva,tre,penal}) =>{

    console.log(dva,tre,penal)

    const [show,setShow] = useState(false);

    if(!show){
        return(
            <section>
                <div class="container events item-box" onClick={()=>setShow(true)}>
            
                    <h1 class="title" style={{cursor:'pointer'}} >Мероприятия </h1>
                    <h1>&#8744;</h1>
            
                </div>
            </section>
        )
    }else{
        return(
            <section>
                <div class="container  item-box">
            
                   <div class="container events " onClick={()=>setShow(false)}>
            
                        <h1 class="title" style={{cursor:'pointer'}} >Мероприятия </h1>
                        <h1>&#8743;</h1>
                
                    </div>
                    <div class='inside-container'>
                       <ul>
                           <li> <p>Соревнования 2 VS 2:</p>
                           {
                               dva.map((e,i)=>
                               <ul class='event-item'>
                                    <li>Дата: <p>{e.date}</p></li>
                                    <li>Забито: <p>{e.zabito}</p></li>
                                    <li>Пропущенно: <p>{e.propush}</p></li>
                                    <li>Общая оценка: <p>{e.mark}</p></li>
                                </ul>
                               )
                           }
                            </li>
                           <li> <p>Соревнования 3 VS 3:</p>
                           {
                               tre.map((e,i)=>
                               <ul class='event-item'>
                                    <li>Дата: <p>{e.date}</p></li>
                                    <li>Забито: <p>{e.zabito}</p></li>
                                    <li>Пропущенно: <p>{e.propush}</p></li>
                                    <li>Общая оценка: <p>{e.mark}</p></li>
                                </ul>
                               )
                           }
                           </li>
                                
                           <li> <p>Пенальти:</p>
                           {
                               penal.map((e,i)=>
                               <ul class='event-item'>
                                    <li>Дата: <p>{e.date}</p></li>
                                    <li>Забито: <p>{e.zabito}</p></li>
                                    <li>Пропущенно: <p>{e.propush}</p></li>
                                    <li>Общая оценка: <p>{e.mark}</p></li>
                                </ul>
                               )
                           }
                           </li>
                       </ul>
                    </div>
                </div>
            </section>
        )
    }

}
