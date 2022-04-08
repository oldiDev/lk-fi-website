import React, { useState } from "react";
import list_awards from "./awards.json";


export const award = () => {
    return (
        <>
            <section class="hero-section">
                <a href="#about" class="banner-icon">
                    <i class="flaticon-down-arrow"></i>
                </a>
                <div class="container">
                    <div class="hero-content">
                        <h1 class="title" data-bg="Награды"><span>Награды</span></h1>
                        <ul class="breadcrumb">
                            <li>
                                <a href="/home">Домашняя Страница</a>
                            </li>
                            <li>
                                <span>Награды</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="record-section padding-top padding-bottom" id="about">
                <div class="container">
                    <div class="mb-30-none">
                        <Pagination_Award />
                    </div>
                </div>
            </section>
        </>
    )
}


const Awards_Component = ({ posts }) => {
    return (
        <>
            {
                posts.map((e, i) => <div key={i} class="award-item">
                    <div class="award-thumb">
                        <div class="thumb">
                            <img src={e.img} alt="award" />
                        </div>
                        <div class="cont">
                            <span>x</span>{e.count}
                        </div>
                    </div>
                    <div class="award-content">
                        <h4 class="title">{e.name}</h4>
                        <p>{e.post}</p>
                    </div>
                </div>)
            }

        </>
    )
}
const Pagination = ({ awardPerPage, totalAwards, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalAwards / awardPerPage); i++) {
        pageNumbers.push(i);

    }

    return (
        <nav>
            <ul class="pagination">
                {pageNumbers.map(number =>

                    <li key={number}  >
                        <a onClick={() => paginate(number)} href="#0" >{number}</a>
                    </li>

                )}
            </ul>
        </nav>
    )
}
export default function Pagination_Award() {

    const [currentPage, setCurrentPage] = useState(1);
    const [awardPerPage] = useState(3);

    //get current award
    const indexOfLastAward = currentPage * awardPerPage;
    const indexOfFirstAward = indexOfLastAward - awardPerPage;
    const currentAward = list_awards.player_award.slice(indexOfFirstAward, indexOfLastAward);

    // Change Page

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <>
            <Pagination awardPerPage={awardPerPage} totalAwards={list_awards.player_award.length} paginate={paginate} />
            <Awards_Component posts={currentAward} />
            <Pagination awardPerPage={awardPerPage} totalAwards={list_awards.player_award.length} paginate={paginate} />

        </>
    )

}



