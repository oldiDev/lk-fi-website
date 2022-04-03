import React, { Fragment } from "react";


export const SectionAwards = () => {
    return (
        <Fragment>
              <section class="award-section padding-top oh">
                <div class="container">
                    <div class="section-header-2">
                        <h2 class="title">
                            <div class="stroke-text">Награды</div>
                            <span class="text-theme">Полученые</span> <span>Награды</span>
                        </h2>
                    </div>
                    <div class="row mb-30-none justify-content-center">
                        <div class="col-md-6 col-lg-4">
                            <div class="award-item-2">
                                <div class="award-inner">
                                    <div class="award-thumb">
                                        <div class="thumb">
                                            <img src="./images/award/01.png" alt="award"/>
                                        </div>
                                    </div>
                                    <div class="award-content">
                                        <h2 class="title">03</h2>
                                        <h6 class="subtitle">Игрок Года</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="award-item-2">
                                <div class="award-inner">
                                    <div class="award-thumb">
                                        <div class="thumb">
                                            <img src="./images/award/02.png" alt="award"/>
                                        </div>
                                    </div>
                                    <div class="award-content">
                                        <h2 class="title">01</h2>
                                        <h6 class="subtitle">Лучший Игрок</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="award-item-2">
                                <div class="award-inner">
                                    <div class="award-thumb">
                                        <div class="thumb">
                                            <img src="./images/award/03.png" alt="award"/>
                                        </div>
                                    </div>
                                    <div class="award-content">
                                        <h2 class="title">87</h2>
                                        <h6 class="subtitle">Лучший Игрок Матча</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}