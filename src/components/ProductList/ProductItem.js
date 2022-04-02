import { useDispatch } from "react-redux";
import { updateSelectedProduct } from "../../store/reducer";


function ProductItem(props) {
    
  const dispatch = useDispatch();
  const itemClickHandler = () => {
    dispatch(updateSelectedProduct(props.product));
  }
  return (
      <div className="product-item" onClick={itemClickHandler}>
        <div className="item-header">{props.product?.title}</div>
        <div className="content">
          { props.product?.images?.length > 0 ? 
            <div className="thumbnail">
              <img src={props.product?.images[0].thumb} alt={"no image"}/>
            </div> 
            : 
            <div> no image </div> 
          }

          <div className="price">{props.product?.price + ' e'}</div>
        </div>
      </div>
    );
  }
  
export default ProductItem;
  