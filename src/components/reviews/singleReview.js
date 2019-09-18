import React from 'react'
import './singleReview.css'
import StarRatings from 'react-star-ratings';
const singleReview = (props) => {

    return (
        <div className="review">
                
            <blockquote>
            <div className="text">
                {props.review}
                </div>
            </blockquote>
            <div className="rating">
                <StarRatings
                    rating={props.DocRate}
                    starRatedColor="#efa252"
                    starDimension="17px"
                    numberOfStars={5}
                    starSpacing="2px" />
            </div>
        </div>)
}

export default singleReview; 