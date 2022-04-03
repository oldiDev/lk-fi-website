import React,{useState} from "react";

export const FullGradde = ({two,tre,penal}) =>{
    const [show,setShow] = useState(false);

    var grade = two+tre+penal;

    if(!show){
        return(
            <section>
                <div class="container grade  item-box" onClick={()=>setShow(true)}>
            
                    <h1 class="title" style={{cursor:'pointer'}} >Заработано баллов</h1>
                    <h1>&#8744;</h1>
                </div>
            </section>
        )
    }else{
        return(
            <section>
                <div class="container  item-box" style={{backgroud:'#000'}}>
            
                    <div class="container grade" onClick={()=>setShow(false)}>
                
                        <h1 class="title" style={{cursor:'pointer'}} >Заработано баллов : {grade}</h1>
                        <h1>&#8743;</h1>
                    </div>
                        <div class='inside-container'>
                           <ul class='event-item'>
                               <li>Посещаеммость: <p></p></li>
                               <li>Лагерь: <p></p></li>
                               <li>2 против 2 : <p>{two}</p></li>
                               <li>3 против 3 : <p>{tre}</p></li>
                               <li>Пенальти : <p>{penal}</p></li>
                           </ul>
                        </div>
                
                    </div>
            </section>
        )
    }
    
}