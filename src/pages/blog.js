import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BLOG_SINGLE_ROUTE } from "./components/utils/consts";
import { SiteHeader } from "./components/header";
import { SiteFooter } from "./components/footer";

const PostList = () => {

    const params = useParams()
    const it_number = params.id;

    return (
        <>
            <SiteHeader />
            <body style={{minHeight: "calc(100vh - 100px)"}}>
                <div class="blog-body-container">
                    <div class="blog-title">
                        <span>Все новости</span>
                    </div>
                    <div class="blog-array">
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
                    <div key={i} class="information-page-array">
                        <div class="information-page-item" onClick={() => history.push(BLOG_SINGLE_ROUTE + '/' + it_number + '/' + e.id)}>
                            <div class="section-blog-content">
                                <div class="blog-body-news">Новости</div>
                                <div class="blog-body-content">
                                    <div id="post-title">
                                        {e.Post_Title}
                                    </div>
                                    <div>{e.Post_teaser}</div>
                                </div>
                                <div class="blog-body-footer">
                                    <div id="blog-green-line"></div>
                                    <div>{e.Post_author} {e.Post_author_lastname}</div>
                                    <div>{e.Post_Date.split('-').reverse().join('.')}</div>
                                </div>
                            </div>
                            <img class="blog-img" src={e.Post_image.length != 0 ? "https://cdn.lk-ft.ru" + e.Post_image[0]?.url : "/images/banner/banner.png"} alt="blog-img"/>
                        </div>
                    </div>
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


    return (
        <>
            <Post_Component posts={posts} it_number={it_number} />
        </>
    )

}

export default PostList;