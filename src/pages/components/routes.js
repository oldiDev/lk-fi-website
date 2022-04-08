
import { Auth } from "../Auth"
import { award } from "../award"
import PostList from "../blog"
import { Blog_Single } from "../blog-single"
import { Contact } from "../contact"
import { Home } from "../Home"
import  AdminPanel  from "./AdminPanel"
import { ADMIN_ROUTE, AUTH_ROUTE, AWARD_ROUTE, BLOG_ROUTE, BLOG_SINGLE_ROUTE, CONTACT_ROUTE, HOMEPAGE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"


export const authRoutes = [
    
    
]
export const publicRoutes = [
    {
        path: HOMEPAGE_ROUTE + '/:id',
        Component : Home
    },
    {
        path: BLOG_ROUTE + '/:id',
        Component : PostList
    },
    {
        path: AWARD_ROUTE ,
        Component : award  
    },
    {
        path: CONTACT_ROUTE + '/:id',
        Component : Contact  
    },
    {
        path: BLOG_SINGLE_ROUTE + '/:test'+'/:id',
        Component : Blog_Single 
    },
    {
        path: AUTH_ROUTE,
        Component : Auth  
    },
    {
        path: REGISTRATION_ROUTE,
        Component : Auth  
    },
    {
        path: ADMIN_ROUTE,
        Comment: AdminPanel
    }

]