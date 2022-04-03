import React, { Fragment } from "react";


export const SectionSkills = () =>{
    return(
        <Fragment>
            <section class="skill-section padding-top-2 padding-bottom-2 oh pos-rel">
                <div class="skill-thumb d-none d-xl-block wow fadeInUp" data-wow-duration="1s"><img src="./images/skills/skills.png" alt="skill"/></div>
                <div class="skill-ball d-none d-xl-block wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s"><img src="./images/skills/skill-ball.png" alt="skill"/></div>
                <div class="container">
                    <div class="section-header-2">
                        <h2 class="title">
                            <div class="stroke-text">Способности</div>
                            <span class="text-theme">Мои</span> <span>Способности</span>
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-xl-9">
                            <div class="circle-area">
                                <div class="circle-item">
                                    <div class="progress1 circle">
                                        <strong></strong>
                                    </div>
                                    <h4 class="title">Блок</h4>
                                </div>
                                <div class="circle-item">
                                    <div class="progress2 circle">
                                        <strong></strong>
                                    </div>
                                    <h4 class="title">Передача Мяча</h4>
                                </div>
                                <div class="circle-item">
                                    <div class="progress3 circle">
                                        <strong></strong>
                                    </div>
                                    <h4 class="title">Ведение Мяча</h4>
                                </div>
                                <div class="circle-item">
                                    <div class="progress4 circle">
                                        <strong></strong>
                                    </div>
                                    <h4 class="title">Удар</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         </section>*
        </Fragment>
    )
}