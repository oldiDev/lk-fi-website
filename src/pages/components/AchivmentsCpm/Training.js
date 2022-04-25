import React from "react";

export const Training = ({countTraining}) => {

    return (
        <section>
            <div class="achivements-container">
                <span class="achivements-title">Колличество посещенных тренеровок:</span>
                <span class="achivements-value">{countTraining}</span>
            </div>
        </section>
    )

}