import { useDispatch } from "react-redux";
import { updateSelectedProduct } from "../../store/reducer";


function Review(props) {
    
  const dispatch = useDispatch();
  
  return (
    <div className="review-wrapper">{props.review.comment + '  by ' + props.review.op}</div>
    );
  }
  
export default Review;
  