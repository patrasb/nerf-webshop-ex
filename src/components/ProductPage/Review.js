import moment from "moment";
import { useDispatch } from "react-redux";
import { processReview, updateSelectedProduct } from "../../store/reducer";


function Review(props) {
    
  const dispatch = useDispatch();
  
  const removeReview = () => {
    dispatch(processReview(props.review));
  }
  
  return (
    <div className="review-wrapper">
      <div className="info">
        <p className="comment">" {props.review.comment} "</p>
        <p className="op">{props.review.op} at <span>{moment(props.review.timestamp).format('LL')}</span></p>
      </div>
      <div className="action" onClick={removeReview}>
        <span>&times;</span>
      </div>
    </div>
    );
  }
  
export default Review;
  