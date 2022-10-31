import React, { Component } from 'react'


export default class Rating extends Component {
  render() {
    let ratingArr = [];
    for(let i = 0; i < this.props.rating; i++){
      ratingArr.push(<p>⭐️</p>)
    }
    return (
      <div id='rating'>{ratingArr}</div>
    )
  }
}
