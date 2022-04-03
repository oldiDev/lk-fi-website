import React, { Component } from 'react'
import { format } from 'date-fns'






class Test_Comen extends Component {
  state = {
    comments: [],
    form: {
      name: '',
      comment: ''
    }
  }
  componentDidMount() {
    if (localStorage.getItem('state')) {
      this.setState({ ...JSON.parse(localStorage.getItem('state')) })
    }
  }
  addComment = () => {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // max id +1
          name: this.state.form.name,
          comment: this.state.form.comment,
          date: new Date()
        }
      ],
      form: {
        name: '',
        comment: ''
      }
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }
  removeComment = (id) => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }
  handleChange = (e) => {
   // console.log(e.target.name)
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }
  render() {
    return (

/*       <div class="comment-wrapper">
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
        </div>*/
        <div class="comment-wrapper">
        <h3 class="m-title"><span>Оставить</span> Комментарий</h3>
          <form class="contact-form mb-30-none"></form>
          <div class="contact-form-group">
              {this.state.comments.map(comment => <div key={comment.id}>
                <span style={{ fontStyle: 'italic' }}>{comment.id} - {format(comment.date, 'dd/MM/yyyy')}: </span>
              <div class="contact-form-group">  
                <strong>{comment.name}, </strong>
              </div>
              <div class="contact-form-group">
                <span>{comment.comment}</span>
              </div>
                <button onClick={this.removeComment.bind(null, comment.id)}>Удалить комментарий</button>
              </div>)}
            <div>
                <label>Имя: <input
                  type="text"
                  value={this.state.form.name}
                  name="name"
                  onChange={this.handleChange} /></label>
                <label>Комментарий: <textarea
                  name="comment"
                  value={this.state.form.comment}
                  onChange={this.handleChange}></textarea>
                </label>
                <div class="contact-form-group">
                <button onClick={this.addComment}>Добавить комментарий</button>
                </div>
              </div>
            </div>
      </div>
    )
  }
}

 

export default Test_Comen
