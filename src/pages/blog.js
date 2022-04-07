import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BLOG_SINGLE_ROUTE, HOMEPAGE_ROUTE } from "./components/utils/consts";
import { SiteHeader } from "./components/header";
import { SiteFooter } from "./components/footer";

const PostList = () => {

    const params = useParams()
    const it_number = params.id;

    return (
        <>
            <SiteHeader />
            <body>
                <div class="blog-body-container">
                    <div class="blog-title">
                        <span>Вся информация</span>
                    </div>
                    <div class="information-conttainer">
                        <Pagination_Post it_number={it_number} />
                    </div>
                </div>

            </body>
            <SiteFooter />
        </>
    );
};


const Post_Component = ({ posts, it_number }) => {

    const history = useHistory()
    // console.log("proverka0 ",posts)
    JSON.stringify(posts);
    // console.log("proverka1 ",posts )
    return (
        <>
            {
                posts.map((e, i) =>
                
                    // <div key={i} class="col-lg-10">
                    //     <div class="post-item">
                    //         <div class="post-thumb">
                    //             <a href="blog-single.html">
                    //                 <img src={'https://cdn.lk-ft.ru' + e.Post_image.url} alt="blog" />
                    //             </a>
                    //         </div>
                    //         <div class="post-content">
                    //             <div class="post-date">
                    //                 <a href="#0"><i class="flaticon-clock"></i>{e.Post_Date}</a>
                    //             </div>
                    //             <h4 class="title">
                    //                 <a href="/blog_single" style={{ color: "white" }}>{e.Post_Title}</a>
                    //             </h4>
                    //             <p>{e.Post_teaser}</p>
                    //             <a href="#single-post" class="custom-button" style={{ color: "white" }} onClick={() => history.push(BLOG_SINGLE_ROUTE + '/' + it_number + '/' + e.id)} >Подробности</a>
                    //         </div>
                    //     </div>
                    // </div>
                )
            }

        </>
    )
}

function Pagination_Post({ it_number }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(4);

    //get current post
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;


    const [posts, setPosts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const fetchData = () => {
        fetch('https://cdn.lk-ft.ru/posts')
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setPosts(data);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.log(error);
            });
    };
    React.useEffect(() => {
        fetchData();
    }, []);
    if (isLoading) {
        return <div>Загрузка...</div>;
    }




    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Post_Component posts={posts} it_number={it_number} />
        </>
    )

}

export default PostList;