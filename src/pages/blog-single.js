import React from 'react'
import { useHistory, useParams } from 'react-router'
import { SiteFooter } from './components/footer'
import { SiteHeader } from './components/header'

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

    var post_img;
    var post_rich_text;
    var post_title_text;
    var post_author;
    var post_author_lastname;
    var post_teaser;
    var post_date;
    var post_author_lastname

    var author_icon;

    posts.map((e, i) => { if (e.id == it_number) { post_img = e.Post_image } })
    posts.map((e, i) => { if (e.id == it_number) { post_rich_text = e.Post_text } })
    posts.map((e, i) => { if (e.id == it_number) { post_title_text = e.Post_Title } })
    posts.map((e, i) => { if (e.id == it_number) { post_author = e.Post_author } })
    posts.map((e, i) => { if (e.id == it_number) { post_author_lastname = e.Post_author_lastname } })
    posts.map((e, i) => { if (e.id == it_number) { post_teaser = e.Post_teaser } })
    posts.map((e, i) => { if (e.id == it_number) { post_date = e.Post_Date.split('-').reverse().join('.') } })
    //author pic
    player.map((e, i) => { if (e.lastname == post_author_lastname && e.firstname == post_author) author_icon = e.avatar })

    return (
        <>
            <SiteHeader />
            <section>
                <div class="container">
                    <div class="blog-title">
                        <span>{post_title_text}</span>
                    </div >
                    <div class="single-blog-date">
                        <span>{post_date}</span>
                        <span>{post_author} {post_author_lastname}</span>
                    </div>
                    <div class="single-blog-img-container">
                        <img class="single-blog-img" src={"https://cdn.lk-ft.ru" + post_img?.url} alt="blog-img"></img>
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
