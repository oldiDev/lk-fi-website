import React from "react";
import { useHistory, useParams } from "react-router";
import { SiteFooter } from "./footer";
import { SiteHeader } from "./header";
import { BLOG_SINGLE_ROUTE } from "./utils/consts";

export const SectionBlog = () =>{
  const history = useHistory()  
  const params = useParams()
  const it_number = params.id;
  


  const [posts, setPosts] = React.useState([]);
  const [show,setShow] = React.useState(false);
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
  posts.map((e,i) => {
  post_arr.push(e);
    })

  post_arr.length=4;
 
  //console.log(post_arr)
  if(show){
    return(
        <>
                <section class="blog-section" style={{display:"flex"}}>
                    <div class="container">
                        <div class="section-header-2">
                        <div class="container">
                            <h2 class="title" onClick={()=> setShow(false)} style={{cursor:'pointer'}}>
                                <div class="stroke-text">Последние новсти</div>
                                <span class="text-theme">Информация</span>
                            </h2>
                        </div>
                        <div class="">
                        { post_arr.map((e,i) => <>
                            <div class="blog-footer-widget blog-item-2 mt-3" >
                            
                                <img className="blog-footer-widget-right" src={"https://cdn.lk-ft.ru"+e.Post_image?.url}/>
                                <div className="blog-footer-widget-left">
                                    <div class="blog-body">
                                        <h5 class="title"><a href="#0">{e.Post_Title}</a></h5>
                                        <p class="line-limit-3">{e.Post_teaser}</p>
                                        <a href="#single-post" class="read-more" onClick={()=> history.push(BLOG_SINGLE_ROUTE+'/'+it_number+'/'+e.id)}><span>Подробнее</span></a>
                                    </div>
                                    <div class="blog-footer">
                                        <div class="author">
                                            <div class="content">
                                                <a href="#single-post" class="title"  onClick={()=> history.push(BLOG_SINGLE_ROUTE+'/'+it_number+'/'+e.id)}>{e.Post_author} {e.Post_author_lastname}</a>
                                            </div>
                                        </div>
                                        <a href="#single-post" onClick={()=> history.push(BLOG_SINGLE_ROUTE+'/'+it_number+'/'+e.id)}><i class="flaticon-calendar"></i>{e.Post_Date}</a>
                                    </div>
                                </div>
                            
                            </div>
                        </>
                        )}
                        </div>
                        </div>
                    </div>
                </section>
        </>
    )
  }else{
      return(
        <section class="blog-section" style={{display:"flex"}}>
        <div class="container">
            <div class="section-header-2">
                
                <h2 class="title" onClick={()=> setShow(true)} style={{cursor:'pointer'}}>
                    <div class="stroke-text">Последние новсти</div>
                    <span class="text-theme">Информация</span>
                </h2>
            </div>
        </div>
        </section>
      )
  }
}