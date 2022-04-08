import React, {Fragment} from "react";


export const SectionAbout = () => {
    return(
        <Fragment>
                <section class="about-section padding-top padding-bottom-2 pos-rel oh" id="about">
                    <div class="about-thumb-2 d-none d-lg-block">
                        <img src="./images/about/about-man.png" alt="about"/>
                    </div>
                    <div class="container">
                        <div class="section-header-2">
                            <h2 class="title">
                                <div class="stroke-text">Информация</div>
                                <span class="text-theme">Обо</span> <span>Мне</span>
                            </h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="about-item">
                                    <div class="thumb">
                                        <img src="./images/about/01.png" alt="about"/>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Биография</h5>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 year Richard McClintock, a Latin </p>
                                    </div>
                                </div>
                                <div class="about-item">
                                    <div class="thumb">
                                        <img src="./images/about/02.png" alt="about"/>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Награды</h5>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 year Richard McClintock, a Latin </p>
                                    </div>
                                </div>
                                <div class="about-item">
                                    <div class="thumb">
                                        <img src="./images/about/03.png" alt="about"/>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Образование</h5>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 year Richard McClintock, a Latin </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </Fragment>
    )
}