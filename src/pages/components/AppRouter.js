import React, { useContext } from 'react'
import { Redirect, Route,  Switch } from 'react-router'
import { Context } from '../..'
import { authRoutes, publicRoutes } from './routes'
import { AUTH_ROUTE, HOMEPAGE_ROUTE } from './utils/consts'




export const AppRouter = () => {
    const {user} = useContext(Context)

    
   // console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path , Component}) =>
            <Route key = {path} path={path} component = {Component} exact/>
            )}
            {publicRoutes.map(({path , Component}) =>
            <Route key = {path} path={path} component = {Component} exact/>
            )}
            <Redirect to={AUTH_ROUTE}/>
        </Switch>
    )
}
