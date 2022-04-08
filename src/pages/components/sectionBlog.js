import React from "react";
import { useHistory, useParams } from "react-router";
import { SiteFooter } from "./footer";
import { SiteHeader } from "./header";
import { BLOG_SINGLE_ROUTE } from "./utils/consts";

export const SectionBlog = () => {
    const history = useHistory()
    const params = useParams()
    const it_number = params.id;



    const [posts, setPosts] = React.useState([]);
    const [show, setShow] = React.useState(false);
    const fetchData = () => {
        fetch('https://cdn.lk-ft.ru/posts')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            })
    };
    React.useEffect(() => {
        fetchData();
    }, []);

    var post_arr = [];
    posts.map((e, i) => {
        post_arr.push(e);
    })

    post_arr.length = 4;

    if (show) {
        return (
            <>
                <div class="container" style={{ display: "flex" }}>
                    <div class="section-header-2">
                        <div>
                            <div class="title" onClick={() => setShow(false)}>
                                <span class="text-theme-show">Информация</span>
                                <img src="/images/client/down-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                            </div>
                        </div>
                        <div class="section-blog-array">
                            {post_arr.map((e, i) => <>
                                <div class="section-blog-item" onClick={() => history.push(BLOG_SINGLE_ROUTE + '/' + it_number + '/' + e.id)}>
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
                                    <img class="blog-img" src={"https://cdn.lk-ft.ru" + e.Post_image?.url} />
                                </div>
                            </>
                            )}
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div class="container">
                <div class="section-header-2">
                    <h2 class="title" onClick={() => setShow(true)} style={{ cursor: 'pointer' }}>
                        <span class="text-theme">Информация</span>
                        <img src="/images/client/right-arrow.svg" alt="right-arrow" className="client-menu-arrow"></img>
                    </h2>
                </div>
            </div>
        )
    }
}