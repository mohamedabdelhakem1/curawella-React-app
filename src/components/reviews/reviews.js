import React from 'react';
import SingleReview from './singleReview'
import './reviews.css'
class Reviews extends React.Component {
    reviews = `Fantastic doctor. She was absolutely amazing with everything. She was so great with all my tests very compassionate and very concerned with both physical and mental health. Staff is great too.`;
    rate = [{
        rate: 4,
        review: this.reviews
    }, {
        rate: 3,
        review: this.reviews
    }, {
        rate: 5,
        review: this.reviews
    }, {
        rate: 4,
        review: this.reviews
    }];
    thisClass = this;
    render() {
        return (
            <section className="reviews__box">
                <p className="title"> Patient's Review</p>
                <div className="reviews">
                    {this.rate.map( obj=> (<SingleReview review={obj.review} DocRate={obj.rate} />))    }
                </div>
            </section>
        );
    }
}
export default Reviews;