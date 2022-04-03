import React from 'react'
import { useHistory, useParams } from 'react-router'
import { SiteFooter } from './components/footer'
import { SiteHeader } from './components/header'
import { HOMEPAGE_ROUTE } from './components/utils/consts'

export const Blog_Single = () =>{
   //  const [posts, setPosts] = useState({info: []})

    const params = useParams()
    const it_number = params.id;
    const that_number=params.test;

    


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

        var author_icon;

            posts.map((e,i) => {if(e.id == it_number){post_img = e.Post_image}})
            posts.map((e,i) => {if(e.id == it_number){post_rich_text = e.Post_text}})
            posts.map((e,i) => {if(e.id == it_number){post_title_text = e.Post_Title}})
            posts.map((e,i) => {if(e.id == it_number){post_author = e.Post_author}})
            posts.map((e,i) => {if(e.id == it_number){post_author_lastname = e.Post_author_lastname}})
            posts.map((e,i) => {if(e.id == it_number){post_teaser = e.Post_teaser}})    
            //author pic
            player.map((e,i) => {if(e.lastname == post_author_lastname && e.firstname == post_author ) author_icon = e.avatar})
            
    return( 
        <>
            <SiteHeader/>
    <section class="hero-section" id="single-post">
        {/* <a href="#about" class="banner-icon">
            <i class="flaticon-down-arrow"></i>
        </a> */}
        <div class="container">
            <div class="hero-content">
                <h1 class="title" data-bg="БЛОГ"><span>Подробности Блога</span></h1>
                <ul class="breadcrumb">
                    <li> 
                        <a href={HOMEPAGE_ROUTE+'/'+that_number}>Домашняя Страница</a>
                    </li>
                    <li>
                        <span>Подробности Блога</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="blog-section padding-top padding-bottom" id="about" style={{background:"#212529" ,marginBottom: "-46px"}}>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10"> 
                               <div class="post-item post-details">
                        <div class="post-thumb">
                            <img src={"https://cdn.lk-ft.ru"+post_img?.url} alt="blog"/>
                        </div>
                        <div class="post-content">
                            {/* <div class="post-date">
                                <a href="#0"><i class="flaticon-clock"></i>{}</a>
                            </div> */}
                            <h4 class="title">
                                {post_title_text}
                            </h4>
                            <p>
                                {post_rich_text}
                            </p>
                        </div>
                    </div>
                    <div class="post-author">
                        <div class="thumb">
                            <img src={"https://cdn.lk-ft.ru"+author_icon?.url} alt="blog"/>
                        </div>
                        <h6 class="title">{post_author}</h6>
                        <span class="info">Автор</span>
                        <p>{post_teaser}</p>
                    </div>
                               
                        
{/*                     <div class="comment-wrapper">
                        <h3 class="m-title"><span>Комен</span>тарии (18)</h3>
                        <ul class="comment-area">
                            <li>
                                <div class="comment-item">
                                    <div class="comment-thumb">
                                        <a href="#0"><img src="./images/blog/aut1.png" alt="blog"/></a>
                                    </div>
                                    <div class="comment-content">
                                        <h6 class="title"><a href="#0">David James <span>15 hours ago</span></a></h6>
                                        <p>A urna vestibulum blandit. Amet adipiscing morbi nam, mauris luctus phasellus ligula ultricies massa, ac nullam, aliquam gravida dapibus quis, praesent pede inte</p>
                                        <a href="#0" class="read-more"><i class="fas fa-caret-right"></i> View 5 Reply</a>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div class="comment-item">
                                            <div class="comment-thumb">
                                                <a href="#0"><img src="./images/blog/aut2.png" alt="blog"/></a>
                                            </div>
                                            <div class="comment-content">
                                                <h6 class="title"><a href="#0">Injamamul Haque <span>15 hours ago</span></a></h6>
                                                <p>A urna vestibulum blandit. Amet adipiscing morbi nam, mauris luctus phasellus ligula ultricies massa, ac nullam, aliquam gravida dapibus quis, praesent pede inte</p>
                                                <a href="#0" class="read-more"><i class="fas fa-caret-right"></i> View 5 Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div class="comment-item">
                                    <div class="comment-thumb">
                                        <a href="#0"><img src="./images/blog/aut3.png" alt="blog"/></a>
                                    </div>
                                    <div class="comment-content">
                                        <h6 class="title"><a href="#0">Mahadi Khan <span>15 hours ago</span></a></h6>
                                        <p>A urna vestibulum blandit. Amet adipiscing morbi nam, mauris luctus phasellus ligula ultricies massa, ac nullam, aliquam gravida dapibus quis, praesent pede inte</p>
                                        <a href="#0" class="read-more"><i class="fas fa-caret-right"></i> View 5 Reply</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="comment-wrapper">
                        <h3 class="m-title"><span>Оставить</span> Комментарий</h3>
                        <form class="contact-form mb-30-none">
                            <div class="contact-form-group">
                                <input type="text" placeholder="Полное Имя" name="name"/>
                            </div>
                            <div class="contact-form-group">
                                <input type="text" placeholder="Email/Номер Телефона" name="email"/>
                            </div>
                            <div class="contact-form-group">
                                <textarea name="message" id="message" placeholder="Оставить Комментарий"></textarea>
                            </div>
                            <div class="contact-form-group">
                                <button type="submit">Опубликовать</button>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    <SiteFooter />
        </>
    );
}
