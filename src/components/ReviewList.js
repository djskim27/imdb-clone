import React, { Component } from 'react';

import Review from './Review';

class ReviewList extends Component {
render() {
    const reviews =[
        {comment: 'This movie sucks'},
        {comment: 'This movie is kay'},
        {comment: 'This movie blows'},
        {comment: 'This movie sucks'},
        {comment: 'This movie is hooray'},
        {comment: 'This movie is nay'}
    ];

    const reviewComponents = reviews.map((review) => {
        return <Review />
    })

    return (

        <div>
            { reviewComponents }
        </div>
)
}
}

export default ReviewList