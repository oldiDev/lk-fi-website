import React, { useState } from "react";

export const FullGradde = ({ two, tre, penal }) => {
    const [show, setShow] = useState(false);

    var grade = two + tre + penal;

    if (!show) {
        return (
            <section>
                <div class="achivements-container" onClick={() => setShow(true)}>
                    <div class="achivements-title" style={{ cursor: 'pointer' }}>
                        <span>Заработанно баллов</span>
                        <img src="/images/client/right-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section>
                <div>
                    <div class="achivements-container" onClick={() => setShow(false)}>
                        <div class="achivements-title" style={{ cursor: 'pointer' }} >
                            <span>Заработано баллов</span>
                            <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                        </div>
                    </div>
                    <div class='inside-container'>
                        <ul class='event-item'>
                            <li>Всего заработанно баллов:<p></p></li>
                            <li>Лагерь:<p></p></li>
                            <li>2 против 2: <p>{two}</p></li>
                            <li>3 против 3: <p>{tre}</p></li>
                        </ul>
                    </div>

                </div>
            </section>
        )
    }

}