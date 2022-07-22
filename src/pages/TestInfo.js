import React from "react";

const TestInfo = ({ togglePopUp }) => {

    return (
        <div className="info-wrapper">
            <div className="info-container">
                <div className="close-button" onClick={togglePopUp}></div>
                <div className="info-header">Тестирование FootSkill</div>
                <div className="info-content">
                    <div className="info-content-element">
                        <div style={{ width: 'fit-content' }}>
                            <div className="test-point"></div>
                        </div>
                        <div className="info-content-text">
                            <b>Сила удара</b> – измеряется специальным профессиональным радаром с 5, 10,15  метров в зависимости от возраста с целью выявления технической составляющей элемента и последующей корректировки.
                            <p>
                                <a href="https://drive.google.com/file/d/1eegW5wUxhrF6umQx_ezOZvwW81iG8NyE/view?usp=sharing" target="_blank">Пример тестирования</a>
                            </p>
                        </div>
                    </div>
                    <div className="info-content-element">
                        <div style={{ width: 'fit-content' }}>
                            <div className="test-point"></div>
                        </div>
                        <div className="info-content-text">
                            <b>Высота прыжка</b> – тест проводится на оборудовании Vert, которое позволяет корректно оценить силу, технику вертикального прыжка.
                            <p>
                                <a href="https://drive.google.com/file/d/1TEeeLV1Gokx88i_yJtqWHEh_c7N_2q1s/view?usp=sharing" target="_blank">Пример тестирования</a>
                            </p>
                        </div>
                    </div>
                    <div className="info-content-element">
                        <div style={{ width: 'fit-content' }}>
                            <div className="test-point"></div>
                        </div>
                        <div className="info-content-text">
                            <b>Длина прыжка</b> – тест, направленный на оценку скоростно-силовых способностей и мощности.
                            <p>
                                <a href="https://drive.google.com/file/d/1EUwIMm2j4xIhuUbfKCAv8Cm3dV7aXLBX/view?usp=sharing" target="_blank">Пример тестирования</a>
                            </p>
                        </div>
                    </div>
                    <div className="info-content-element">
                        <div style={{ width: 'fit-content' }}>
                            <div className="test-point"></div>
                        </div>
                        <div className="info-content-text">
                            <b>Реакция</b> – тестирование проводится на оборудовании Blazepod на умение быстро принимать решение и приспосабливаться к меняющимся факторам, реагируя нажатиями на определенный датчик вокруг спортсмена.
                            <p>
                                <a href="https://drive.google.com/file/d/1fnz3G9iAsll_rQCtTigA8C3s1KDTBG7X/view?usp=sharing" target="_blank">Пример тестирования</a>
                            </p>
                            </div>
                    </div>
                    <div className="info-content-element">
                        <div style={{ width: 'fit-content' }}>
                            <div className="test-point"></div>
                        </div>
                        <div className="info-content-text">
                            <b>Скорость бега</b> – выявляется проф. оборудованием на дистанции 10 метров с места и 10 метров с разбега, с целью выявления технической составляющей элемента и последующей корректировки.
                            <p>
                                <a href="https://drive.google.com/file/d/1E_Vr1r6m4OAnbxV6DrQui1OTEettVtp_/view?usp=sharing" target="_blank">Пример тестирования (с места)</a>
                            </p>
                            <p style={{marginTop: "10px"}}>
                                <a href="https://drive.google.com/file/d/16wd-Y24LADyweZlidqyfkfln1axUjpCc/view?usp=sharing" target="_blank">Пример тестирования (с разбега)</a>
                            </p>
                        </div>

                    </div>
                    <div className="info-content-element">
                        <div style={{ width: 'fit-content' }}>
                            <div className="test-point"></div>
                        </div>
                        <div className="info-content-text">
                            <b>Agility test</b> – тестирование ловкости 5-10-5 метров, показывает способность спортсмена ускоряться, изменять направление и повторно ускоряться как можно быстрее. Проводится на оборудовании BlazePOD.
                            <p>
                                <a href="https://drive.google.com/file/d/1cLpLeXc4TzNbgUfaLLYThSy2wBKKzsge/view?usp=sharing" target="_blank">Пример тестирования</a>
                            </p>
                        </div>
                    </div>
                    <div className="info-content-element">
                        <div style={{ width: 'fit-content' }}>
                            <div className="test-point"></div>
                        </div>
                        <div className="info-content-text">
                            <b>FootSkill test</b> – тестирование контроля мяча, оценки пространства, скорости принятия решения с мячом и завершения в виде передачи мяча. Проходит на специальных стенках-ребаундерах с добавление тренажёров Xlight.
                            <p>
                                <a href="https://drive.google.com/file/d/1hr7koIJ_xpuixmTlc_3wY5K6oMIdFA1N/view?usp=sharing" target="_blank">Пример тестирования</a>
                            </p>
                        </div>
                    </div>
                    <div className="info-content-element">
                        <div style={{ width: 'fit-content' }}>
                            <div className="test-point"></div>
                        </div>
                        <div className="info-content-text">
                            <b>Точность удара</b> – тест, направленный на оценку ситуации с завершением в виде удара по воротам с 9, 10, 11 метров в определенную зону,  которую показывает приложение.
                            <p>
                                <a href="https://drive.google.com/file/d/1sLm25Vw3GAKu6wQ-ZPWaE7JL0nZ-ENtJ/view?usp=sharing" target="_blank">Пример тестирования</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestInfo 