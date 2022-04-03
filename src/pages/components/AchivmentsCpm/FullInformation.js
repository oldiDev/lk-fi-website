import React,{useState} from "react";

export const FullInformation = () =>{
    const [show,setShow] = useState(false);

    if(!show){
        return(
       
                <div class="container inform-contaier">
            
                    <h6 class="title" style={{cursor:'pointer',color:'#08c938'}} onClick={()=>setShow(true)}>Подробнее про систему Достиженй:</h6>
            
                </div>
        )
    }else{
        return(
           
                <div style={{cursor:'pointer'}} onClick={()=>setShow(false)}>
            
                    <div style={{position:'fixed' , top:'0' , left:'0',width:'100%',height:'100%', background:'rgba(135, 135, 135,0.8)',zIndex:'99999998'}}>
                        <div class="full-info-modal" style={{position:'fixed' , top:'10%' , left:'25%',width:'800px',height:'800px', background:'#fff',zIndex:'999999999'}}>
                            <h6 class="title">Подробнее про систему Достиженй:</h6>
                            <div>
                                <ul> <p>Для чего нужна:</p>
                                    <li>1. Простая система обзора посеящаемости и увлеченности вашего ребенка.</li>
                                    <li>2. Возможность увидеть слабые и силные стороны икрока.</li>
                                    <li>3. Индивидуальные бонусы в зависимости от активности и достижений.</li>
                                </ul>
                                <ul> <p>Бонусы в зависимости от индивидуальных достижений:</p>
                                    <li>25 - Скидка на абонемент в 30%. 
                                        1 Персональная тренировка </li>
                                    <li>50 -  Скидка на абонемент в 50%. 
                                        2 Персональные тренировки. 5% скидка на лагерь.</li>
                                    <li>75 -  Скидка на абонемент в 75%. 
                                        3 Персональнае тренировки. 15% скидка на лагерь.</li>
                                    <li>100 - Месячный абонемент. 
                                        5 Персональных тренировок. 25% скидка на лагерь.</li>
                                </ul>
                            </div>
                            <div>
                                + Фирменные Подарки.
                            </div>
                            <div style={{fontWeight:'bold', marginTop:'60px'}}>
                                О всех подробнстях уточняйте у вашего тренера.
                            </div>
                        </div>
                    </div>
            
                </div>
        )
    }
    
}