import React, { useState } from "react";

export const Training = ({countTraining}) => {
    // const [show,setShow] = useState(false);

    return (
        <section>
            <div class="achivements-container">
                <span class="achivements-title">Колличество посещенных тренеровок:</span>
                <span class="achivements-value">{countTraining}</span>
            </div>
        </section>
    )

}