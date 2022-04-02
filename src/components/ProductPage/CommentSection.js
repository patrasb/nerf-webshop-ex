import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processReview } from "../../store/reducer";
import Review from "./Review";


function CommentSection(props) {
    
  const dispatch = useDispatch();
    const allReviews = useSelector( state => state.reviews);
    const [reviews, setReviews] = useState([]);
    const [comment, setComment] = useState(null);
    const [commentName, setCommentName] = useState(null);

    useEffect(() => {
        console.log(allReviews);
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

        console.log(comment, commentName);

        dispatch(processReview({productId: props.product.id, comment: comment, op: commentName}));
    }
  return (
    <div className="comment-section">
        <form className="input-wrapper">
            <input 
                value={comment} 
                placeholder="Write a review here" 
                className="comment-input"
                onChange={(e) => setComment(e.target.value)}
            />
            <input 
                value={commentName} 
                placeholder="Please enter your name" 
                className="comment-input"
                onChange={(e) => setCommentName(e.target.value)}
            />
            <button onClick={postComment} className="submit-comment">Submit</button>
        </form>
        {reviews?.length > 0 ? 
            reviews.map((review, index) => (
                <Review key={index} review={review}/>
            ))
            : <div> no reviews </div> }
    </div>
    );
  }
  
export default CommentSection;
  