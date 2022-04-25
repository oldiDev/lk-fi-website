import React from "react";

export const Camp = ({countCamps}) => {

    return (
        <section>
            <div class="achivements-container">
                <span class="achivements-title">Посещение лагеря:</span>
                <span class="achivements-value">{countCamps}</span>
            </div>
        </section>
    )

}