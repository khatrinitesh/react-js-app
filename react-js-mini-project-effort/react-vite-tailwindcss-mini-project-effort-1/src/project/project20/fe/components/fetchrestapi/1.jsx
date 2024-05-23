import axios from 'axios';
import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(){
        super();
        this.state = {
            articles:[]
        }
    }

    componentDidMount(){
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=abf3401335b642099a39be1c3c6ebc58')
        .then((response) => {
            console.log(response.data)
            this.setState({
                articles:response.data.articles
            })
        })
    }


  render() {
    const articles = this.state.articles
    const shownews = articles.map((article) => {
        <>
         <h1>{article.title}</h1>
         <small>{article.author}</small>
         <p>{article.description}</p>
        </>
    })
    return (
      <div className='card'>
        <div className='box'>
            {shownews}
        </div>
      </div>
    )
  }
}
