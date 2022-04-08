import React, { Fragment } from "react";


export const SectionRecords = () =>{
    return(
        <Fragment>       
            <section class="record-section padding-top-2 oh padding-bottom">
                <div class="container">
                    <div class="section-header-2">
                        <h2 class="title">
                            <div class="stroke-text">Рекорды</div>
                            <span class="text-theme">Мои</span> <span>Рекорды</span>
                        </h2>
                    </div>
                    <div class="row justify-content-center mb-30-none">
                        <div class="col-md-6">
                            <div class="record-item">
                                <h5 class="title">Five Consecutive Eur Max Cups</h5>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="record-item">
                                <h5 class="title">The Fastest Goal In World Cup History</h5>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="record-item">
                                <h5 class="title">Most Goals scored In The First Division</h5>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="record-item">
                                <h5 class="title">Most Titles In a Calendar Year</h5>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}