import { makeAutoObservable } from "mobx"


export default class UserPosts {
    constructor() {
        this._title= [
            {id: 0, name: 'Новость 1'},
            {id: 1, name: 'Новость 2'},
            {id: 2, name: 'Новость 3'},
            {id: 3, name: 'Новость 4'},
            {id: 4, name: 'Новость 5'},   
        ]

        this._img= [
            {id: 0, name: './images/blog/blog7.jpg'},
            {id: 1, name: './images/blog/blog7.jpg'},
            {id: 2, name: './images/blog/blog7.jpg'},
            {id: 3, name: './images/blog/blog7.jpg'},
            {id: 4, name: './images/blog/blog7.jpg'},
        ]

        this._richText= [
            {id: 0, name: '1it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'},
            {id: 1, name: '2it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'},
            {id: 2, name: '3it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'},
            {id: 3, name: '4it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'},
            {id: 4, name: '5it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'},
        ]

        this._description= [
            {id: 0, name: 'Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id. Vestibulum cursus vestibulumviverra fusce justo, quisque id porttitor ullamcor'},
            {id: 1, name: 'Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id. Vestibulum cursus vestibulumviverra fusce justo, quisque id porttitor ullamcor'},
            {id: 2, name: 'Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id. Vestibulum cursus vestibulumviverra fusce justo, quisque id porttitor ullamcor'},
            {id: 3, name: 'Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id. Vestibulum cursus vestibulumviverra fusce justo, quisque id porttitor ullamcor'},
            {id: 4, name: 'Lorem ipsum dolor sit amet, cras non sagittis pellentesque donec, nunc eleifend turpmes eu, sed ullamcorper libero magna ac mauris, mollis sem vivamus ut commodo id. Vestibulum cursus vestibulumviverra fusce justo, quisque id porttitor ullamcor'},   
        ]

        this._publishedAt= [
            {id: 0, name: '25 Декабря'},
            {id: 1, name: '25 Декабря'},
            {id: 2, name: '25 Декабря'},
            {id: 3, name: '25 Декабря'},
            {id: 4, name: '25 Декабря'},   
        ]

        this._author= [
            {id: 0, name: 'Имя Автора'},
            {id: 1, name: 'Имя Автора'},
            {id: 2, name: 'Имя Автора'},
            {id: 3, name: 'Имя Автора'},
            {id: 4, name: 'Имя Автора'},   
        ]

        this._authorIcon= [
            {id: 0, name: './images/blog/author.png'},
            {id: 1, name: './images/blog/author.png'},
            {id: 2, name: './images/blog/author.png'},
            {id: 3, name: './images/blog/author.png'},
            {id: 4, name: './images/blog/author.png'},   
        ]

        this._authorDescription= [
            {id: 0, name: 'Об авторе'},
            {id: 1, name: 'Об авторе'},
            {id: 2, name: 'Об авторе'},
            {id: 3, name: 'Об авторе'},
            {id: 4, name: 'Об авторе'},   
        ]

        makeAutoObservable(this)
    }
    
    setTitle(title){
        this._title = title
    }
    setImg(img){
        this._img = img
    }
    setrichText(richText){
        this._richText = richText
    }
    setDescription(description){
        this._description = description
    }
    setPublishedAt(publishedAt){
        this._publishedAt = publishedAt
    }
    setAuthor(author){
        this._author = author
    }
    setAuthorIcon(authorIcon){
        this._authorIcon = authorIcon
    }
    setAuthorDescrition(authorDescription){
        this._authorDescription = authorDescription
    }


    get title(){
        return this._title
    }
    get img(){
        return this._img
    }
    get richText(){
        return this._richText
    }
    get description(){
        return this._description
    }
    get publishedAt(){
        return this._publishedAt
    }
    get author(){
        return this._author
    }
    get authorIcon(){
        return this._authorIcon
    }
    get authorDescription(){
        return this._authorDescription
    }
};
