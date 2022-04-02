import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processReview } from "../../store/reducer";
import Review from "./Review";


function CommentSection(props) {
    
  const dispatch = useDispatch();
    const allReviews = useSelector( state => state.reviews);
    const [reviews, setReviews] = useState([]);
    const [comment, setComment] = useState('');
    const [commentName, setCommentName] = useState('');

    useEffect(() => {
        if(!allReviews) return;
        const reviewsForSelectedProduct = [];
        allReviews.forEach( review => {
            if(review.productId === props.product.id){
                reviewsForSelectedProduct.push(review);
            }
        });

        setReviews(reviewsForSelectedProduct);
    }, [allReviews]);

    const postComment = (e) => {
        e.preventDefault();
        if(comment === '' || commentName === '') return;
        
        dispatch(processReview({productId: props.product.id, comment: comment, op: commentName, createdAt: moment().format()}));

        setCommentName('');
        setComment('');
    }
  return (
    <div className="comment-section">
        <form className="input-wrapper">
            <label htmlFor="comment">Review: </label>
            <input 
                id="comment"
                value={comment} 
                placeholder="Write a review here" 
                className="comment-input"
                onChange={(e) => setComment(e.target.value)}
            />
            <label htmlFor="name">Name: </label>
            <input 
                id="name"
                value={commentName} 
                placeholder="Please enter your name" 
                className="comment-input"
                onChange={(e) => setCommentName(e.target.value)}
            />
            <button onClick={postComment} className="submit-comment">Submit</button>
        </form>
        {
            reviews?.length > 0 ? 
                <div className="reviews-container">
                    <p>{reviews.length + (reviews.length === 1 ? ' review' : ' reviews')}</p>
                    {reviews.map((review, index) => (
                        <Review key={index} review={review}/>
                        ))}
                </div>
            : 
            <div> no reviews </div> 
        }
    </div>
    );
  }
  
export default CommentSection;
  