import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    var reviews = this.props.store.getState().reviews.map( (review, index) => {
      if ( review.restaurantId == this.props.restaurantId ) {
        return <Review review={review} key={index} id={review.id} store={this.props.store} />
      }
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;