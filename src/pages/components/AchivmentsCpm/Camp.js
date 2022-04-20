import React, { useState } from "react";

export const Camp = ({countCamps}) => {
    // const [show, setShow] = useState(false);
    return (
        <section>
            <div class="achivements-container">
                <span class="achivements-title">Посещение лагеря:</span>
                <span class="achivements-value">{countCamps}</span>
            </div>
        </section>
    )

}