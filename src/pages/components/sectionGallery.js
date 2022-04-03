import React from "react";


export const SectionGallery = () =>{
    return(
        <section class="gallery-section padding-top oh">
            <div class="container">
                <div class="section-header-2">
                    <h2 class="title">
                        <div class="stroke-text">Галерея</div>
                        <span class="text-theme">Галерея</span> <span>Фотографий</span>
                    </h2>
                </div>
                <div class="m--15">
                    <div class="gallery-wrapper">
                        <div class="gallery-item-2">
                            <div class="gallery-inner-2">
                                <div class="gallery-content">
                                    <a href="./images/gallery/g5.jpg" class="img-pop"><i class="flaticon-add"></i></a>
                                    <h5 class="title">Barcebox Club</h5>
                                    <span>Canada, Town City</span>
                                </div>
                                <div class="gallery-thumb-2">
                                    <img src="./images/gallery/g5.jpg" alt="gallery"/>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item-2">
                            <div class="gallery-inner-2">
                                <div class="gallery-content">
                                    <a href="./images/gallery/g6.jpg" class="img-pop"><i class="flaticon-add"></i></a>
                                    <h5 class="title">Barcebox Club</h5>
                                    <span>Canada, Town City</span>
                                </div>
                                <div class="gallery-thumb-2">
                                    <img src="./images/gallery/g6.jpg" alt="gallery"/>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item-2">
                            <div class="gallery-inner-2">
                                <div class="gallery-content">
                                    <a href="./images/gallery/g7.jpg" class="img-pop"><i class="flaticon-add"></i></a>
                                    <h5 class="title">Barcebox Club</h5>
                                    <span>Canada, Town City</span>
                                </div>
                                <div class="gallery-thumb-2">
                                    <img src="./images/gallery/g7.jpg" alt="gallery"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}