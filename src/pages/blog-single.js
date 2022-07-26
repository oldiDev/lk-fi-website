import React from 'react'
import { useHistory, useParams } from 'react-router'
import { SiteFooter } from './components/footer'
import { SiteHeader } from './components/header'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export const Blog_Single = () => {
    //  const [posts, setPosts] = useState({info: []})

    const params = useParams()
    const it_number = params.id;
    const that_number = params.test;




    const [player, setPlayer] = React.useState([]);
    const fetchDataPlayer = () => {
        fetch('https://cdn.lk-ft.ru/footballers')
            .then((response) => response.json())
            .then((data) => {
                setPlayer(data);
            })
    };
    React.useEffect(() => {
        fetchDataPlayer();
    }, []);

    // console.log(player);


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

    var post_img = [];
    var post_rich_text;
    var post_title_text;
    var post_author;
    var post_author_lastname;
    var post_teaser;
    var post_date;
    var post_author_lastname;
    let post_video_url = '';


    posts.map((e, i) => {
        if (e.id == it_number) {
            post_img = e.Post_image;
            post_rich_text = e.Post_text;
            post_title_text = e.Post_Title;
            post_author = e.Post_author;
            post_author_lastname = e.Post_author_lastname;
            post_teaser = e.Post_teaser;
            post_date = e.Post_Date.split('-').reverse().join('.');
            post_video_url = e.Post_video;
        }
    })

    return (
        <>
            <SiteHeader />
            <section style={{minHeight: "100vh"}}>
                <div class="container" style={{margin: "0px auto"}}>
                    <div class="blog-title">
                        <span>{post_title_text}</span>
                    </div >
                    <div class="single-blog-date">
                        <span>{post_date}</span>
                        <span>{post_author} {post_author_lastname}</span>
                    </div>
                    <div class="single-blog-img-container">
                        {
                            (post_img.length <= 1) ?
                                <img class="single-blog-img" src={"https://cdn.lk-ft.ru" + post_img[0]?.url} alt="blog-img"></img>
                                :
                                <div className="slide-container">
                                    <Fade>
                                        {post_img.map((slideImage, index) => (
                                            <div className="each-fade" key={index}>
                                                {/* <div style={{ 'backgroundImage': `url(${"https://cdn.lk-ft.ru" + slideImage?.url})` }}>
                                            <span>{slideImage.caption}</span>
                                        </div> */}
                                                <div className='image-container'>
                                                    <img class="single-blog-img" src={"https://cdn.lk-ft.ru" + slideImage?.url} alt="blog-img"></img>
                                                </div>

                                            </div>
                                        ))}
                                    </Fade>
                                </div>
                        }
                        {
                            (post_video_url != '' && post_video_url != null && post_video_url != 0) ?
                                <iframe className='single-blog-video'
                                    src={post_video_url + '?autoplay=1&mute=1'}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen="allowFullScreen"
                                    mozallowfullscreen="mozallowFullScreen"
                                    msallowfullscreen="msallowFullScreen"
                                    oallowfullscreen="oallowFullScreen"
                                    webkitallowfullscreen="webkitallowFullScreen"></iframe> : <></>
                        }
                    </div>
                    <div class="single-blog-content">
                        <span>
                            {post_rich_text}
                        </span>
                    </div>
                </div>
            </section>
            <SiteFooter />
        </>
    );
}
